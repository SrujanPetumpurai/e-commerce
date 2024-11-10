const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')
const zod = require('zod')
const {User,Cart} = require('../db');
const {JWT_SECRET} = require('../config');
const authMiddleware = require('./middleware');

let signupBody  = zod.object({
    userName:zod.string().email(),
    password:zod.string()
}) 

router.post('/signup',async(req,res)=>{
    const {success} = signupBody.safeParse(req.body);
    if(!success){
        return res.status(404).json({
            message:"Email incorrect/Wrong inputs"
        })
    }

    const existingUser = await User.findOne({
        userName:req.body.userName
    });
    if(existingUser){
        return res.json({
            message:"Email already taken"
        })
    }

    const user =  await User.create({
        userName:req.body.userName,
        password:req.body.password
    })

    const userId = user._id;

     Cart.create({
        userId,
    })

    const token = await jwt.sign({userId},JWT_SECRET)

    res.json({
        message:"User created successfully",
        token
    })

    


})

router.post("/signin",async(req,res)=>{
    const {success} = signupBody.safeParse(req.body);
    if(!success){
        return res.status(404).json({
            message:"Credentials incorrect"
        })
    }

    const user = await User.findOne({
        userName:req.body.userName,
        password:req.body.password
    })

    if(!user){
        return res.status(404).json({
            message:"UserName does not exists/password wrong"
        })
    }
    const token =jwt.sign({userId:user._id},JWT_SECRET);
    res.json({
        token:token
    })

})

router.post('/addCart',authMiddleware,async(req,res)=>{

     await Cart.findOneAndUpdate(
        {userId:req.userId},
        {$addToSet:{items:req.body.id}}
    )

    return res.json({
        message:"sussfully added to cart"
    })
    
})

router.get('/getCartItems',authMiddleware,async(req,res)=>{
    const user = await Cart.findOne({
        userId:req.userId
    })
    if(!user){
        return res.status(404).json({
            message:"User not found, sigin first"
        })
    }

    res.json({
        cartItems:user.items
    })
})

router.post('/removeCartItem',authMiddleware,async(req,res)=>{
    const {itemRemove} = req.body;
    const cart = await Cart.findOne({
        userId:req.userId
    })
    if(!cart){
        return res.status(404).json({
            message:"User not found, sigin first"
        })
    }
    cart.items = cart.items.filter(item=>item!==itemRemove)
    await cart.save();

})

module.exports = router;