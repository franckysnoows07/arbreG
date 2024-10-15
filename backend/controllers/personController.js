const Person = require('../models/personsModel');
const mongoose = require('mongoose');

// get all persons
const getPersons = async (req, res) => {

    const userId = req.user._id

    const persons = await Person.find({userId}).sort({createdAt:-1})

    res.status(200).json(persons)
}

//get a single person
const getPerson = async (req, res) => {
    const {id} = req.params


    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such person"})
    }

    const person = await Person.findById({id})

    if (!person) {
        return res.status(404).json('No such Person')
    }

    res.status(200).json(person)
}

//create a new person
const createPerson = async (req, res) => {
    const { firstName, lastName, fatherFullname, motherFullname, birthDate, state, email, gender, photo_url } = req.body;



    try {
        const userId = req.user._id
        const person = await Person.create({
            firstName,
            lastName,
            fatherFullname,
            motherFullname,
            birthDate,
            state,
            email,
            gender,
            photo_url, // Add the photo URL to the database entry
            userId
        });
        res.status(200).json(person);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


//delete a person
const deletePerson = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "the person doesn't exist."})
    }
    const person = await Person.findByIdAndDelete({_id: id})

    if (!person) {
        return res.status(404).json({error: 'No such Person'})
    }

    res.status(200).json({success: "person deleted successfully."})
}

// update a person
const updatePerson = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: "the person doesn't exist."})
    }
    const person = await Person.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    if (!person) {
        return res.status(404).json({error: 'No such Person'})
    }

    res.status(200).json({success: "person updated successfully."})
}

// const searchPersons = async (req, res) => {
//     const { query } = req.query;

//     if (!query) {
//         return res.status(400).json({ error: 'Search query is required' });
//     }

//     try {
//         const userId = req.user._id; // Get the ID of the logged-in user

//         // Perform search using regular expressions (case-insensitive)
//         const persons = await Person.find({
//             userId, // Filter by userId to ensure ownership
//             $or: [
//                 { firstName: { $regex: query, $options: 'i' } },
//                 { lastName: { $regex: query, $options: 'i' } },
//                 { fatherFullname: { $regex: query, $options: 'i' } },
//                 { motherFullname: { $regex: query, $options: 'i' } },
//                 { email: { $regex: query, $options: 'i' } }
//             ]
//         }).sort({ createdAt: -1 });

//         res.status(200).json(persons);
//     } catch (err) {
//         res.status(500).json({ error: 'Failed to search persons' });
//     }
// };
  

module.exports = {
    createPerson,
    getPersons,
    getPerson,
    deletePerson,
    updatePerson,
    //searchPersons
}
