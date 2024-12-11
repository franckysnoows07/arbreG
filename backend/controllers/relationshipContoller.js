const Relationship = require('../models/relationshipModel');
const Person = require('../models/personModel');
const mongoose = require('mongoose');

// create a new relationship
const createRelationship = async (req, res) => {
    const { personLnme, personFnme, id, relationshipType } = req.body;
    const perso1id = await Person.findOne({
        $and: [
          { firstName: personFnme },
          { lastName: personLnme }
        ]
      }).select('_id');

    const person1 = await Person.findById(id1);
    const person2 = await Person.findById(id2);

    if (!person1 || !person2) {
        return res.status(404).json({ error: 'One or both persons not found' });
    }

    const relationship = await Relationship.create({
        person1: id1,
        person2: id2,
        relationshipType
    });

    res.status(200).json(relationship);
};


// Get all relationships for a person
const getRelationships = async (req, res) => {
    const { personId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(personId)) {
        return res.status(404).json({ error: 'Invalid person ID' });
    }

    try {
        const relationships = await Relationship.find({
            $or: [
                { person1: personId },
                { person2: personId }
            ]
        });

        res.status(200).json(relationships);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get relationships' });
    }
};

// Delete a relationship
const deleteRelationship = async (req, res) => {
    const { relationshipId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(relationshipId)) {
        return res.status(404).json({ error: 'Invalid relationship ID' });
    }

    try {
        const relationship = await Relationship.findByIdAndDelete(relationshipId);

        if (!relationship) {
            return res.status(404).json({ error: 'Relationship not found' });
        }

        res.status(200).json({ success: 'Relationship deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete relationship' });
    }
};



module.exports = {
    createRelationship,
    getRelationships,
    deleteRelationship
};