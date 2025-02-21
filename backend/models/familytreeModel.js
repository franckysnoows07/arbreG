const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { familyMemberSchema } = require('./familymemberModel');


const familyTreeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    descp:{
        type: String
    },
    createdBy: {
        name: { type: String, required: true },
        surname: { type: String, required: true }
    },
    familyMembers: [
        familyMemberSchema
    ]
}, { timestamps: true });

module.exports = mongoose.model('FamilyTree', familyTreeSchema)
