require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const personRoutes = require('./routes/persons');
const userRoutes = require('./routes/user');
const relationshipRoutes = require('./routes/relationship')
const familytreeRoutes = require('./routes/familytree')
const familymemberRoutes = require('./routes/familymember')
const cors = require('cors')

// express app
const app = express();

app.use(cors())
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));



//middleware
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/people', personRoutes)
app.use('/api/users', userRoutes)
app.use('/api/relationships', relationshipRoutes)
app.use('/api/familytrees', familytreeRoutes)
app.use('/api/familymembers', familymemberRoutes)



//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for request
        app.listen(process.env.PORT,()=>{
            console.log('connected to db and listening on  port', process.env.PORT);
})

    })
    .catch((error)=>{
        console.log(error);
    })

    