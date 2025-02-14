const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FamilyMember'
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('FamilyTree', familyTreeSchema)
