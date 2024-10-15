const FamilyTree = require('../models/familytreeModel');
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
};

module.exports = {
    createFamilyTree,
    getFamilyTree,
    updateFamilyTree,
    deleteFamilyTree,
    addPersonToTree,
    removePersonFromTree,
    listTreeMembers,
    changePrivacySetting,
    shareTree,
};