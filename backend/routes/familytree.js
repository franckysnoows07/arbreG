const express = require('express');
const router = express.Router();
const familytreeController = require('../controllers/familytreeController');
const { protect } = require('../middleware/requireauth');

//router.use(protect)

// Create a new family tree
router.post('/create', protect,familytreeController.createFamilyTree);

// Get a family tree
router.get('/familytrees/:familyTreeId', familytreeController.getFamilyTree);

//display  all the family trees
router.get('/surname/:surname', familytreeController.getFamilyTreeBySurname);

// Add a family member to a family tree
router.put('/familytrees/:familyTreeId/members/:familyMemberId', familytreeController.addFamilyMember);

module.exports = router;