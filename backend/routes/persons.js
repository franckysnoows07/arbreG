const express = require('express');
const { createPerson, getPeople, getPerson, updatePerson, deletePerson,addViewer,
    removeViewer } = require('../controllers/personController');
const { protect, authorizeViewerOrCreator } = require('../middleware/requireauth');
const router = express.Router();
const passport = require('passport')

router.use(protect)

//Get all person
router.get('/', getPeople)

//get a single person
router.get('/:id', authorizeViewerOrCreator, getPerson)
 //post a new person
router.post('/', createPerson)

 //delete a  person
router.delete('/:id', authorizeViewerOrCreator, (req, res, next) => {
    if (!req.isCreator) return res.status(403).json({ message: 'Only the creator can delete this person' });
    next();
  }, deletePerson);

 //Update a  person
router.patch('/:id', authorizeViewerOrCreator, (req, res, next) => {
    if (!req.isCreator) return res.status(403).json({ message: 'Only the creator can modify this person' });
    next();
  }, updatePerson);

router.post('/:id/viewers', authorizeViewerOrCreator, (req, res, next) => {
    if (!req.isCreator) return res.status(403).json({ message: 'Only the creator can manage viewers' });
    next();
  }, addViewer);
  
router.delete('/:id/viewers', authorizeViewerOrCreator, (req, res, next) => {
    if (!req.isCreator) return res.status(403).json({ message: 'Only the creator can manage viewers' });
    next();
  }, removeViewer);

// Search people by first name or last name
//router.get('/search', personController.searchPersons);

module.exports = router;