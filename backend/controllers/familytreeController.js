const FamilyTree = require('../models/familytreeModel');
const FamilyMember = require('../models/familymemberModel');
const mongoose = require('mongoose');

// Create a new family tree
const createFamilyTree = async (req, res) => {
    const { name, createdBy, familyMembers } = req.body;

    try {
        // Check if the createdBy ID is valid
        if (!mongoose.Types.ObjectId.isValid(createdBy)) {
            return res.status(400).json({ error: 'Invalid createdBy ID' });
        }

        // Check if the createdBy user exists
        const user = await User.findById(createdBy);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Create the family tree
        const familyTree = await FamilyTree.create({
            name,
            createdBy,
            familyMembers
        });

        res.status(200).json(familyTree);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a family tree
const getFamilyTree = async (req, res) => {
    const { familyTreeId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(familyTreeId)) {
        return res.status(404).json({ error: 'Invalid family tree ID' });
    }

    try {
        const familyTree = await FamilyTree.findById(familyTreeId).populate('familyMembers');

        if (!familyTree) {
            return res.status(404).json({ error: 'Family tree not found' });
        }

        res.status(200).json(familyTree);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get family tree' });
    }
};

// Add a family member to a family tree
const addFamilyMember = async (req, res) => {
    const { familyTreeId, familyMemberId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(familyTreeId) || !mongoose.Types.ObjectId.isValid(familyMemberId)) {
        return res.status(404).json({ error: 'Invalid IDs' });
    }

    try {
        const familyTree = await FamilyTree.findById(familyTreeId);

        if (!familyTree) {
            return res.status(404).json({ error: 'Family tree not found' });
        }

        const familyMember = await FamilyMember.findById(familyMemberId);

        if (!familyMember) {
            return res.status(404).json({ error: 'Family member not found' });
        }

        familyTree.familyMembers.push(familyMemberId);
        await familyTree.save();

        res.status(200).json({ success: 'Family member added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add family member' });
    }
};

module.exports = {
    createFamilyTree,
    getFamilyTree,
    addFamilyMember
};