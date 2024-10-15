const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const relationshipSchema = new Schema({
    person1: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Person', 
        required: true 
    },
    person2: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Person', 
        required: true 
    },
    relationshipType: {
        type: String,
        enum: ['parent', 'child', 'spouse', 'sibling', 'other'],
        required: true
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    }
}, { timestamps: true });

module.exports = mongoose.model('Relationship', relationshipSchema);
