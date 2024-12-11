const express = require('express');
const router = express.Router();
const familytreeController = require('../controllers/familytreeController');

// Create a new family tree
router.post('/familytrees', familytreeController.createFamilyTree);

// Get a family tree
router.get('/familytrees/:familyTreeId', familytreeController.getFamilyTree);

// Add a family member to a family tree
router.put('/familytrees/:familyTreeId/members/:familyMemberId', familytreeController.addFamilyMember);

module.exports = router;