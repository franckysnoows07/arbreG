const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

//static methods for signup

userSchema.statics.signup = async function (email, password) {

    if (!email || !password ){
        throw Error('Champ requis')
    }
    if(!validator.isEmail(email)){
        throw Error('Invalid Email')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Invalid Password')
    }
    const exists = await this.findOne({email})

    if(exists){
        throw Error('Email already exists')
    }

    //mypassword
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash})

    return user
}

//static login methods
userSchema.statics.login = async function ( email, password){

    if (!email || !password){
            throw Error('Champ requis')
    }
    const user = await this.findOne({email})

    if(!user){
        throw Error('Email incorrecte')
    }

    const match = await bcrypt.compare(password, user.password)
    
    if(!match){
        throw Error('Incorrect password')
    }
    return user

}

module.exports = mongoose.model('user', userSchema)
