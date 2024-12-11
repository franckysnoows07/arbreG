require('dotenv').config()
const User = require('../models/userModel');
const jwt = require('jsonwebtoken')
const Person = require('../models/personModel')
const bcrypt = require('bcrypt')

//gen token
const generateToken = (_id) =>{
    return jwt.sign({_id}, process.env.JWT_TOKEN||process.env.SECRET, {expiresIn:'3d'})
}

//Enregistrer / Inscrire un user
const signUp = async (req, res) =>{
    const { uname, fName, sName, email, password } = req.body;
    try{
        // //check if the user already exists
        // const existing_user = await User.findOne({email})
        // if (existing_user){
        //     return res.status(400).json({error: 'Utilisateur deja enregistrer'})
        // }
        const user = await User.signup(
            uname, 
            fName, 
            sName, 
            email, 
            password 
        )
        const token = generateToken(user._id)
        
        // Check if this user is a Person in the tree
        const person = await Person.findOne({ fname: fName, sname: sName });
        if (person) {
            person.userId = user._id;
            await person.save();
        }
        
        const userRes = user.toObject()
                delete userRes.password

        res.status(201).json({
            message: 'Enregistrement réussi',
            user: userRes,
            token
        })
        
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

const signIn = async(req, res)=>{
    const { email, password}=req.body

    try{
        //Find thy user by email
        const user = await User.login(email, password)
        

            const token = generateToken(user._id)

                const userRes = user.toObject()
                delete userRes.password

            res.status(200).json({ 
            message: 'Connexion réussie',
            token,
            user:userRes
            })
    }catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }

}
process.env 
module.exports ={
    signUp,
    signIn
}
