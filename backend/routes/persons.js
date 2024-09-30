const express = require('express');
const personController = require('../controllers/personController')
const requireAuth = require('../middleware/requireauth');

const router = express.Router();

router.use(requireAuth)

//Get all person
router.get('/', personController.getPerson)

//get a single person
router.get('/:id', personController.getOnePerson)
 //post a new person
router.post('/', personController.createPerson)

 //delete a  person
 router.delete('/:id', personController.deletePerson)

 //Update a  person
 router.patch('/:id', personController.updatePerson)

// Search people by first name or last name
//router.get('/search', personController.searchPersons);

module.exports = router;