const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser')

mongoose.set('strictQuery', true);
//==============================
const UserRoute = require('./routes/UserRoute');
//==============================

const app = express ();
const serverPort = process.env.SERVER_PORT;


mongoose.connect(
    'mongodb://localhost:27017/test'
).then(()=>{
    app.listen(serverPort, () => {
        console.log(`server started & runnning on the port ${serverPort}`);
    })
})

//==================
app.use('/api/v1/user', UserRoute)
//==================

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/api/v1/test', (req, res) => {
    res.status(200).json({'Message' : 'success'});
    }
)



