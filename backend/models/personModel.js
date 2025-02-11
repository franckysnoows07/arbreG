const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    sname:{ type: String, required: true },
    fname:{ type: String, required: true},
    fSname:{ type: String, required: false},
    fFname:{ type: String, required: false},
    mSname:{ type: String, required: false},
    mFname: { type: String, required: false },
    fState:{ type: String, required: false},
    mState:{ type: String, required: false},
    fdod:{type:Date},
    mdod:{type:Date},
    gender:{ type: String, required: true},
    nationality:{ type: String, required: true},
    ecivil:{type: String},
    profession:{ type: String},
    email:{type:String},
    dob: {type: Date, required: false},
    pob:{type: String},
    dod: {type: Date},
    phone:{type: String},
    child:{type: String},
    nbchild:{type: String},
    bio:{type: String,
        required: false
    },
    createdBy:{type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},
    viewers: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, {timestamps: true})

module.exports = mongoose.model('Person', personSchema)