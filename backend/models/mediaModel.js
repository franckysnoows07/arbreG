<<<<<<< Updated upstream
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
=======
const mongoose = require('mongoose')

const Schema = mongoose.Schema
>>>>>>> Stashed changes

const mediaSchema = new Schema({
    url: { 
        type: String, 
        required: true 
    },
    person: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Person' 
    },
    event: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Event' 
    },
    mediaType: {
        type: String,
        enum: ['image', 'video', 'document'],
        required: true
    },
    description: {
        type: String
    },
    uploadedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }
<<<<<<< Updated upstream
}, { timestamps: true });

module.exports = mongoose.model('Media', mediaSchema);

=======
}, {timestamps: true})

module.exports = mongoose.model('Media', mediaSchema)
>>>>>>> Stashed changes
