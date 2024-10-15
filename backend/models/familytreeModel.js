const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familyTreeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    familyMembers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FamilyMember'
        }
    ],
    privacySetting:{
        type: String,
        enum: ['Public','Privé', 'Restreint']
    }
}, { timestamps: true });

module.exports = mongoose.model('FamilyTree', familyTreeSchema);
