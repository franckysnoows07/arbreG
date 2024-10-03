require('dotenv').config()


const express = require('express');
const mongoose = require('mongoose');
const personRoutes = require('./routes/persons');
const userRoutes = require('./routes/user');


// express app
const app = express();



//middleware
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/persons', personRoutes)
app.use('/api/user', userRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for request
        app.listen(process.env.PORT,()=>{
            console.log('connected to db and listening on port port', process.env.PORT);
})

    })
    .catch((error)=>{
        console.log(error);
    })


