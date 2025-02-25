const FamilyTree = require('../models/familytreeModel');
const {FamilyMember} = require('../models/familymemberModel');
const User = require('../models/userModel');
const mongoose = require('mongoose');
const Person = require('../models/personModel');

// Create a new family tree
const createFamilyTree = async (req, res) => {
    try {
        const { name, descp } = req.body; // userId is the ObjectId of the creator
        const userId = req.user._id;
        // Fetch the user's name and surname
        const user = await User.findById(userId).select('sName fName');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create the family tree with name and surname instead of ObjectId
        const familyTree = new FamilyTree({
            name,
            descp,
            createdBy: { name: user.sName, surname: user.fName }
        });

        await familyTree.save();
        res.status(201).json(familyTree);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error });
    }
};

// Get a family tree
const getFamilyTree = async (req, res) => {
    const { familyTreeId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(familyTreeId)) {
        return res.status(404).json({ error: 'Invalid family tree ID' });
    }

    try {
        const familyTree = await FamilyTree.findById(familyTreeId).populate('familyMembers');

        if (!familyTree) {
            return res.status(404).json({ error: 'Family tree not found' });
        }

        res.status(200).json(familyTree);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get family tree' });
    }
};

// Display the family tree based on surname 
const getFamilyTreeBySurname = async (req, res)=>{
    const {surname} = req.params;
    try{
        const familyTree = await FamilyTree.find({
            name: { $regex: surname, $options: 'i' } // 'i' makes it case-insensitive
        }).populate('familyMembers');
        if(familyTree === 0){
            return res.status(404).json({error: 'Family tree not found'});
        }

         res.status(200).json(familyTree);
        
    }catch(error){
        res.status(500).json({error: 'Failed to get family tree'});
    }
}

// Add a family member to a family tree
const addFamilyMember = async (req, res) => {
    const { familyTreeId, familyMemberId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(familyTreeId) || !mongoose.Types.ObjectId.isValid(familyMemberId)) {
        return res.status(404).json({ error: 'Invalid IDs' });
    }

    try {
        const familyTree = await FamilyTree.findById(familyTreeId);

        if (!familyTree) {
            return res.status(404).json({ error: 'Family tree not found' });
        }

        const familyMember = await FamilyMember.findById(familyMemberId);

        if (!familyMember) {
            return res.status(404).json({ error: 'Family member not found' });
        }

        familyTree.familyMembers.push(familyMemberId);
        await familyTree.save();

        res.status(200).json({ success: 'Family member added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add family member' });
    }
};

const createFamilyMember = async (req, res) =>{
    const {familyTreeId}= req.params;
    const {name, surname, relation, ppere, npere, pmere, nmere} = req.body;

    try {
        const familyTree = await FamilyTree.findById(familyTreeId);

        if (!familyTree) {
            return res.status(404).json({ error: 'Family tree not found' });
        }
        const person = new Person({
            sname: surname,
            fname: name,
            fSname: npere,
            fFname: ppere,
            mSname: nmere,
            mFname: pmere,
            createdBy: req.user._id,
            nationality: " ",
            gender: " "
        })
        await person.save();
    
        // Create and save the father if values exist
        
        const person1 = new Person({
                sname: npere,
                fname: ppere,
                child: 'Oui',
                createdBy: req.user._id,
                nationality: " ",
                gender: " "
            });
            await person1.save();
        

        // Create and save the mother if values exist
        const person2 = new Person({
                sname: nmere,
                fname: pmere,
                child: 'Oui',
                createdBy: req.user._id,
                nationality: " ",
                gender: " "
            });
            await person2.save();
        

        const familyMember = new FamilyMember({
            person: person._id,
            familyTree: familyTreeId,
            name,
            surname,
            relation
        })
        await familyMember.save();

   

        familyTree.familyMembers.push({
            name:familyMember.name,
            surname: familyMember.surname,
            relation: familyMember.relation
        })
        await familyTree.save();

        res.status(201).json({success: 'family member added successfuly', familyMember});

    }catch (error) {
        res.status(500).json({error: error.message});
    }

}
module.exports = {
    createFamilyTree,
    getFamilyTree,
    addFamilyMember,
    getFamilyTreeBySurname,
    createFamilyMember
};