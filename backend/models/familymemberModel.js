const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familyMemberSchema = new Schema({
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    },
    familyTree: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FamilyTree'
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    relation: {
        type: String
    }
}, { timestamps: true });

module.exports = { 
   FamilyMember: mongoose.model('FamilyMember', familyMemberSchema),
   familyMemberSchema
};