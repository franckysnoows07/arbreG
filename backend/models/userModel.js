const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const { matchPath } = require('react-router-dom')

const userSchema = new mongoose.Schema({
    uname:{type: String, required: true, unique: true},
    fName:{type: String, required: true},
    sName:{type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
},{ timestamps:true})

userSchema.statics.signup = async function(uname,fName, sName, email, password)  {
    if (!email || !password) {
        throw Error('All fields must be filled')
      }
      if (!validator.isEmail(email)) {
        throw Error('Email not valid')
      }
      if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
      }
    

    const exists = await this.findOne({ email })

    if (exists){
        throw Error('Email already in use')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    console.log('Hashed Password:', hash);
    const user = await this.create({email, password: hash, uname, fName, sName})

    return user
}

userSchema.statics.login = async function(email, password) {

    if (!email || !password) {
      throw Error('All fields must be filled')
    }
    const user = await this.findOne({ email })

    if(!user){
        throw Error('Email incorrecte')
    }
  
    const match = await bcrypt.compare(password, user.password)
    console.log('password: ', password )
    console.log('passwordh: ', user.password )
    console.log('Password match: ', match)
    if (!match) {
      throw Error('Incorrect password')
    }
  
    return user
  }
module.exports = mongoose.model('User',userSchema)
