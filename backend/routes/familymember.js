const express = require('express');
const router = express.Router();
const familymemberController = require('../controllers/familymemberController');

// Create a new family member
router.post('/familymembers', familymemberController.createFamilyMember);

// Get a family member
router.get('/familymembers/:familyMemberId', familymemberController.getFamilyMember);

// Update a family member
router.put('/familymembers/:familyMemberId', familymemberController.updateFamilyMember);

// Delete a family member (optional)
//router.delete('/familymembers/:familyMemberId', familymemberController.deleteFamilyMember);

module.exports = router;