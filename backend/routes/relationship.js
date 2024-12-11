const express = require('express')
const router = express.Router()
const relationshipController = require('../controllers/relationshipContoller')

// Create a new relationship
router.post('/', relationshipController.createRelationship)

// Get a relationship
router.get('/', relationshipController.getRelationships)

// Update a relationship
//router.put('/relationships/:relationshipId', relationshipController.updateRelationship);

// Delete a relationship
router.delete('/:relationshipId', relationshipController.deleteRelationship)

module.exports = router