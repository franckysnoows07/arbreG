const Relationship = require('../models/relationshipModel')
const Person = require('../models/personModel')
const mongoose = require('mongoose');

// get all persons
const getRelationships = async (req, res) => {

    const userId = req.user._id

    const relations = await Relationship.find({userId}).sort({createdAt:-1})

    res.status(200).json(relations)
}

//get a single person
const getRelationship = async (req, res) => {
    const {id1, id2} = req.params


    if(!mongoose.Types.ObjectId.isValid(id1)){
        return res.status(404).json({error:"First person not found"})
    }
    if(!mongoose.Types.ObjectId.isValid(id2)){
        return res.status(404).json({error:"Second person not found"})
    }

    const person1 = await Person.findById({id1})
    const person2 = await Person.findById({id2})

    if (!person1 || !person2) {
        return res.status(404).json('No such Person')
    }
    const relationship = await Relationship.findOne({ person1:id1, person2:id2})

    if(!relationship){
        return res.status(404).json('No relationship found btw these people')
    }
    res.status(200).json({person1, person2, relationship: relationship.relationshipType} )
}

//create a new person
const createRelationship = async (req, res) => {
    const {id1, id2, relationshipType, startDate, endDate}= req.body

    if (!mongoose.Types.ObjectId.isValid(id1) || !mongoose.Types.ObjectId.isValid(id2)){
        return res.status(404).json({error: 'Invalid person '})
    }

    const person1 = await Person.findById(id1)
    const person2 = await Person.findById(id2)

    if(!person1 || !person2){
        res.status(404).json({error:'one or both person not found'})
    }

    const relationship = await Relationship.create({
        person1: id1,
        person2: id2,
        relationshipType,
        startDate,
        endDate
    })
    res.status(200).json(relationship)
}


// delete a relationship
const deleteRelationship = async (req, res) => {
    const { id1, id2 } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id1) || !mongoose.Types.ObjectId.isValid(id2)) {
        return res.status(404).json({ error: 'Invalid person IDs' });
    }

    const relationship = await Relationship.findOneAndDelete({ person1: id1, person2: id2 });

    if (!relationship) {
        return res.status(404).json({ error: 'No relationship found between these persons' });
    }

    res.status(200).json({ success: 'Relationship deleted successfully.' });
};

// update a relationship
const updateRelationship = async (req, res) => {
    const { id1, id2 } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id1) || !mongoose.Types.ObjectId.isValid(id2)) {
        return res.status(404).json({ error: 'Invalid person IDs' });
    }

    const relationship = await Relationship.findOne({ person1: id1, person2: id2 });

    if (!relationship) {
        return res.status(404).json({ error: 'No relationship found between these persons' });
    }

    const updatedRelationship = await Relationship.findByIdAndUpdate(
        { _id: relationship._id },
        { ...req.body },
        { new: true }
    );

    res.status(200).json(updatedRelationship);
};

module.exports = {
    updateRelationship,
    getRelationships,
    getRelationship,
    createRelationship,
    deleteRelationship
}
