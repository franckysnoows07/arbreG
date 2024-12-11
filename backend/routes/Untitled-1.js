const User = require('../models/userModel');
const bcrypt = require('bcrypt')
const Person = require('../models/personModel')
const jwt = require('jsonwebtoken')

//new User

const signUp = async (req, res) =>{
    try{
        const { uname, fName, sName, email, password, personId } = req.body;

        //check if the user already exists

        existing_user = await User.findOne({ $or:[{email}, {uname}]})
        if (existing_user){
            return res.status(400).json({error: 'Utilisateur deja enregistrer'})
        }

        //Find the associated Person
        const person = await Person.find({
            $or:[
                {_id: personId },
                {email: email},
                {
                    $and: [
                        {fname: fName}, {sname: sName}
                    ]
                }
        ]});
        if (!person) {
          return res.status(404).json({ error: 'Person not found ' });
        }else{
            const passHash = await bcrypt.hash(password, 10)
            const user = new User({
                uname,
                fName,
                sName,
                email,
                passwordHash: passHash,
                personReference: person._id
            });
            await user.save();
            res.status(201).json(user);
        }
        //hash password
        const passHash = await bcrypt.hash(password, 10)

        //create user
        const user = new User({
        uname,
        fName,
        sName,
        email,
        passwordHash: passHash,
    });
        await user.save();
        res.status(201).json(user);
    }catch(err){
        res.status(500).json({error: 'Erreur lors de la creation du user'})
    }
}

const signIn = async(req, res)=>{
    try{
        const { email, password}=req.body

        //Find thy user by email
        const user = await User.findOne({ email})
        if (!user){
            return res.status(404).json({error: 'Utilisateur non trouvé'})
        }
        //Check the password
        const isPasswordValid = await bcrypt.compare(password, user.passwordHash)
        if (!isPasswordValid) {
            return res.status(404).json({error: 'Mot de passe Invalide'})
        }

        //Generate token 
        const token = jwt.sign(
            {userId: user._id, email: user.email},
            process.env.SECRET || "",
            {expiresIn: '1h'}
        )

        //Sensitive info removing 
        const userRes = user.toObject()
        delete userRes.passwordHash
        
        res.status(200).json({
            message: 'Connexion réussie',
            token,
            user:userRes
        })
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Erreur lors de la connexion'})
    }

}

module.exports ={
    signUp,
    signIn
}
