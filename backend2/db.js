const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/e-commerceTwo')
.then(()=>{
    console.log("MONGOGO CONNECTION OPEN")
})
.catch(err=>{
    console.log("OH NO MONGO CONNECTION ERROR!!")
    console.log(err)
})


 const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    items:{
        type:[Number],
    }
})

let User = mongoose.model('User',userSchema);
let Cart = mongoose.model('Cart',cartSchema);

module.exports={
    User,
    Cart
}