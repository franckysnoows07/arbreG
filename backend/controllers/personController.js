const Person = require('../models/personModel')

const createPerson = async (req, res) => {
  // if (!req.user || !req.user._id) {
  //   return res.status(401).json({ message: 'Unauthorized: User information is missing' });
  // }
    const {sname, fname,fSname,fFname,mFname,mSname,fState,mState,gender,profession,dob,dod,pob,nationality,email,ecivil,phone,mdod,fdod,child,nbchild,viewers,userId} = req.body
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
            pob,
            nationality,
            email,
            ecivil,
            phone,
            mdod,
            fdod,
            child,
            nbchild,
            viewers,
            userId , 
            createdBy: req.user._id
        })
        await person.save()
        res.status(201).json(person);
        console.log(person);
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
    }
}

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

  // Create a bio for a person
const createBio = async (req, res) => {
  const { personId } = req.params 
  const { bio } = req.body;

  try {
    const person = await Person.findById(personId);

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    person.bio = bio;
    await person.save();

    res.status(201).json(person);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create bio' });
  }
};

const getPersonId = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming req.user contains the authenticated user's info
    const person = await Person.findOne({ user: userId });

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    res.status(200).json({ personId: person._id });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
    createPerson,
    getPeople,
    getPerson,
    updatePerson,
    deletePerson,
    addViewer,
    removeViewer,
    createBio,
    getPersonId
}