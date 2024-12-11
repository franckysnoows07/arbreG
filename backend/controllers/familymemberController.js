const FamilyMember = require('../models/familymemberModel');
const Person = require('../models/personModel');
const Relationship = require('../models/relationshipModel');
const mongoose = require('mongoose');

// Create a new family member
const createFamilyMember = async (req, res) => {
    const { personId, familyTreeId, relationships } = req.body;

    try {
        // Check if the personId, familyTreeId, and relationship IDs are valid
        if (!mongoose.Types.ObjectId.isValid(personId) ||
            !mongoose.Types.ObjectId.isValid(familyTreeId) ||
            !relationships.every(relationshipId => mongoose.Types.ObjectId.isValid(relationshipId))) {
            return res.status(400).json({ error: 'Invalid IDs' });
        }

        // Check if the person, family tree, and relationships exist
        const person = await Person.findById(personId);
        const familyTree = await FamilyTree.findById(familyTreeId);
        const validRelationships = await Promise.all(relationships.map(async (relationshipId) => {
            return await Relationship.findById(relationshipId);
        }));

        if (!person || !familyTree || validRelationships.some(relationship => !relationship)) {
            return res.status(404).json({ error: 'Person, family tree, or relationships not found' });
        }

        // Create the family member
        const familyMember = await FamilyMember.create({
            person: personId,
            familyTree: familyTreeId,
            relationships: relationships
        });

        res.status(200).json(familyMember);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a family member
const getFamilyMember = async (req, res) => {
    const { familyMemberId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(familyMemberId)) {
        return res.status(404).json({ error: 'Invalid family member ID' });
    }

    try {
        const familyMember = await FamilyMember.findById(familyMemberId)
            .populate('person')
            .populate('familyTree')
            .populate('relationships');

        if (!familyMember) {
            return res.status(404).json({ error: 'Family member not found' });
        }

        res.status(200).json(familyMember);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get family member' });
    }
};

// Update a family member
const updateFamilyMember = async (req, res) => {
    const { familyMemberId } = req.params;
    const { personId, familyTreeId, relationships } = req.body;

    try {
        // Check if the familyMemberId, personId, familyTreeId, and relationship IDs are valid
        if (!mongoose.Types.ObjectId.isValid(familyMemberId) ||
            (!personId && !familyTreeId && !relationships) ||
            (!personId && mongoose.Types.ObjectId.isValid(personId)) ||
            (!familyTreeId && mongoose.Types.ObjectId.isValid(familyTreeId)) ||
            (!relationships && relationships.some(relationshipId => mongoose.Types.ObjectId.isValid(relationshipId)))) {
            return res.status(400).json({ error: 'Invalid IDs' });
        }

        // Check if the family member exists
        const familyMember = await FamilyMember.findById(familyMemberId);

        if (!familyMember) {
            return res.status(404).json({ error: 'Family member not found' });
        }

        // Update the family member
        if (personId) {
            const person = await Person.findById(personId);

            if (!person) {
                return res.status(404).json({ error: 'Person not found' });
            }

            familyMember.person = personId;
        }

        if (familyTreeId) {
            const familyTree = await FamilyTree.findById(familyTreeId);

            if (!familyTree) {
                return res.status(404).json({ error: 'Family tree not found' });
            }

            familyMember.familyTree = familyTreeId;
        }

        if (relationships) {
            const validRelationships = await Promise.all(relationships.map(async (relationshipId) => {
                return await Relationship.findById(relationshipId);
            }));

            if (validRelationships.some(relationship => !relationship)) {
                return res.status(404).json({ error: 'Relationships not found' });
            }

            familyMember.relationships = relationships;
        }

        await familyMember.save();

        res.status(200).json(familyMember);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update family member' });
    }
};

module.exports = {
    createFamilyMember,
    getFamilyMember,
    updateFamilyMember
};