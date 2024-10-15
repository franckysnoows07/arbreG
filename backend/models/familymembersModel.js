const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familyMemberSchema = new Schema({
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    },
    familyTree: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FamilyTree',
        required: true
    },
    relationships: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Relationship'
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('FamilyMember', familyMemberSchema);
