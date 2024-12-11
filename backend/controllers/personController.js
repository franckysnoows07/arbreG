const Person = require('../models/personModel')

<<<<<<< Updated upstream
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



=======
const createPerson = async (req, res) => {
  // if (!req.user || !req.user._id) {
  //   return res.status(401).json({ message: 'Unauthorized: User information is missing' });
  // }
    const {sname, fname,fSname,fFname,mFname,mSname,fState,mState,gender,profession,dob,dod,viewers,userId} = req.body
>>>>>>> Stashed changes
    try {
        const person =  new Person({
            sname, 
            fname,
            fSname,
            fFname,
            mFname,
            mSname,
            fState,
            mState,
            gender,
            profession,
            dob,
            dod,
            viewers,
            userId , 
            createdBy: req.user._id
        })
        await person.save()
        res.status(201).json(person);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getPeople = async (req, res) => {
    try {
        const { linkedToUser } = req.query; // Optional filter
        const query = { createdBy: req.user.id };

        // If linkedToUser is true, filter for persons linked to a user account
        if (linkedToUser === 'true') {
        query.userId = { $ne: null }; // Persons with a linked user
        } else if (linkedToUser === 'false') {
        query.userId = null; // Persons without a linked user
        }

        const persons = await Person.find(query)
        .populate('userId', 'name email');
        res.status(200).json(persons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getPerson = async (req, res) => {
    try {
        const person = await Person.findOne({ _id: req.params.id, createdBy: req.user.id });
        if (!person) return res.status(404).json({ message: 'Person not found' });
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

<<<<<<< Updated upstream

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
=======
const updatePerson = async (req, res) => {
    try {
        const person = await Person.findOneAndUpdate(
          { _id: req.params.id, createdBy: req.user.id },
          req.body,
          { new: true }
        );
        if (!person) return res.status(404).json({ message: 'Person not found' });
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ message: error.message });
>>>>>>> Stashed changes
    }
}

<<<<<<< Updated upstream
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
=======
const deletePerson = async (req, res) => {
    try {
      const person = await Person.findOneAndDelete({ _id: req.params.id, createdBy: req.user.id });
      if (!person) return res.status(404).json({ message: 'Person not found' });
      res.status(200).json({ message: 'Person deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Add Viewer
const addViewer = async (req, res) => {
    try {
      const { viewerId } = req.body;
      if (!req.isCreator) return res.status(403).json({ message: 'Only the creator can manage viewers' });
>>>>>>> Stashed changes
  
      if (req.person.viewers.includes(viewerId)) {
        return res.status(400).json({ message: 'Viewer already added' });
      }
  
      req.person.viewers.push(viewerId);
      await req.person.save();
      res.status(200).json({ message: 'Viewer added successfully', person: req.person });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Remove Viewer
  const removeViewer = async (req, res) => {
    try {
      const { viewerId } = req.body;
      if (!req.isCreator) return res.status(403).json({ message: 'Only the creator can manage viewers' });
  
      req.person.viewers = req.person.viewers.filter((id) => id.toString() !== viewerId);
      await req.person.save();
      res.status(200).json({ message: 'Viewer removed successfully', person: req.person });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
    createPerson,
<<<<<<< Updated upstream
    getPersons,
    getPerson,
    deletePerson,
=======
    getPeople,
    getPerson,
>>>>>>> Stashed changes
    updatePerson,
    deletePerson,
    addViewer,
    removeViewer,
}