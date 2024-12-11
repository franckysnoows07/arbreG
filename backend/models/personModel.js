const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    sname:{ type: String, required: true },
    fname:{ type: String, required: true},
    fSname:{ type: String, required: true},
    fFname:{ type: String, required: true},
    mSname:{ type: String, required: true},
    mFname: { type: String, required: true },
    fState:{ type: String, required: true},
    mState:{ type: String, required: true},
    fdod:{type:Date},
    mdod:{type:Date},
    gender:{ type: String, required: true},
    nationality:{ type: String, required: true},
    ecivil:{type: String},
    profession:{ type: String},
    email:{type:String},
    dob: {type: Date, required: true},
    pob:{type: String},
    dod: {type: Date},
    phone:{type: String},
    child:{type: String},
    nbchild:{type: String},
    createdBy:{type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},
    viewers: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, {timestamps: true})

module.exports = mongoose.model('Person', personSchema)