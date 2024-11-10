const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes/user.js')

mongoose.connect('mongodb://127.0.0.1:27017/e-commerceTwo')
.then(()=>{
    console.log("MONGOGO CONNECTION OPEN")
})
.catch(err=>{
    console.log("OH NO MONGO CONNECTION ERROR!!")
    console.log(err)
}) 

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use('/shopy',router)

app.listen(5000,()=>{
    console.log("APP IS LISTENING ON PORT 5000!")
})