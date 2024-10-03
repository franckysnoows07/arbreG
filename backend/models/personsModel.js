const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    fatherFullname: {
        type: String,
        required: true
    },
    motherFullname: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true,
    },
    state: {
        type: String
    },
    email: {
        type: String
    },
    deathDate: {
        type: Date
    },
    gender: {
        type: String
    },
    userId: {
        type: String,
        required: true
    },
    photo_url:{
        type: String
    } 
}, {timestamps: true})

module.exports = mongoose.model('Person', personSchema)

