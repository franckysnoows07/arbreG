const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mediaSchema = new Schema({
    filename: { 
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
        required: true
    },
    fileId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'uploads.files' // Reference to the GridFS file
      }
}, {timestamps: true})

module.exports = mongoose.model('Media', mediaSchema)
