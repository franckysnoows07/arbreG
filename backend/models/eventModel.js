<<<<<<< Updated upstream
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventType: {
        type: String,
        enum: ['birth', 'death', 'marriage', 'other'],
        required: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    },
    location: {
        type: String
    }
}, { timestamps: true });

=======
const mongoose = require('mongoose')

const  Schema = mongoose.Schema 

const eventSchema = new Schema (
    {
        eventType: {
            type: String,
            enum: ['birth', 'death', 'marriage', 'other'],
            required: true
        },
        description: {
            type: String
        },
        date: {
            type: Date,
            required: true
        },
        person: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Person'
        },
        location: {
            type: String
        }
    }, { timestamps: true }
)
>>>>>>> Stashed changes
module.exports = mongoose.model('Event', eventSchema);
