const FamilyTree = require('../models/familytreeModel');
<<<<<<< Updated upstream
const Person = require('../models/personModel');
const mongoose = require('mongoose');

// CRUD familyTree
const createFamilyTree = async (req, res) => {
    const familyTree = new FamilyTree(req.body);
    const result = await familyTree.save();
    res.status(200).json(result);
};

const getFamilyTree = async (req, res) => {
    const { id } = req.params;
    const familyTree = await FamilyTree.findById(id);
    if (!familyTree) {
        return res.status(404).json({ error: 'Family tree not found' });
    }
    res.status(200).json(familyTree);
};

const updateFamilyTree = async (req, res) => {
    const { id } = req.params;
    const familyTree = await FamilyTree.findByIdAndUpdate(id, req.body, { new: true });
    if (!familyTree) {
        return res.status(404).json({ error: 'Family tree not found' });
    }
    res.status(200).json(familyTree);
};

const deleteFamilyTree = async (req, res) => {
    const { id } = req.params;
    const familyTree = await FamilyTree.findByIdAndDelete(id);
    if (!familyTree) {
        return res.status(404).json({ error: 'Family tree not found' });
    }
    res.status(200).json({ success: 'Family tree deleted successfully' });
};

// addPersonToTree
const addPersonToTree = async (req, res) => {
    const { familyTreeId, personId } = req.body;
    const familyTree = await FamilyTree.findById(familyTreeId);
    const person = await Person.findById(personId);

    if (!familyTree || !person) {
        return res.status(404).json({ error: 'Family tree or person not found' });
    }

    familyTree.members.push(person);
    const result = await familyTree.save();
    res.status(200).json(result);
};

// removePersonFromTree
const removePersonFromTree = async (req, res) => {
    const { familyTreeId, personId } = req.body;
    const familyTree = await FamilyTree.findById(familyTreeId);

    if (!familyTree) {
        return res.status(404).json({ error: 'Family tree not found' });
    }

    const index = familyTree.members.findIndex((member) => member._id.toString() === personId);
    if (index === -1) {
        return res.status(404).json({ error: 'Person not found in the family tree' });
    }

    familyTree.members.splice(index, 1);
    const result = await familyTree.save();
    res.status(200).json(result);
};

// listTreeMembers
const listTreeMembers = async (req, res) => {
    const { familyTreeId } = req.params;
    const familyTree = await FamilyTree.findById(familyTreeId);

    if (!familyTree) {
        return res.status(404).json({ error: 'Family tree not found' });
    }

    res.status(200).json(familyTree.members);
};

// changePrivacySetting
const changePrivacySetting = async (req, res) => {
    const { familyTreeId, privacySetting } = req.body;
    const familyTree = await FamilyTree.findByIdAndUpdate(familyTreeId, { privacySetting }, { new: true });

    if (!familyTree) {
        return res.status(404).json({ error: 'Family tree not found' });
    }

    res.status(200).json(familyTree);
};

// shareTree
const shareTree = async (req, res) => {
    const { familyTreeId, sharedWith }  = req.body;
    const familyTree = await FamilyTree.findByIdAndUpdate(familyTreeId, { sharedWith }, { new: true });

    if (!familyTree) {
        return res.status(404).json({ error: 'Family tree not found' });
    }

    res.status(200).json(familyTree);
=======
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
>>>>>>> Stashed changes
};

module.exports = {
    createFamilyTree,
    getFamilyTree,
<<<<<<< Updated upstream
    updateFamilyTree,
    deleteFamilyTree,
    addPersonToTree,
    removePersonFromTree,
    listTreeMembers,
    changePrivacySetting,
    shareTree,
=======
    addFamilyMember
>>>>>>> Stashed changes
};