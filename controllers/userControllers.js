const asyncHandler = require("express-async-handler")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

// import the schema model from contact model
const User = require('../models/userModel')

// register a user 
//@route POST /api/users/register
//@acces public
const registerUser = asyncHandler(async(req, res)=>{
    const {username, email , password} =  req.body  
    if (!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email})
    if (userAvailable){
        res.status(400);
        throw new Error("User already registred");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 8)
    console.log("HashedPassword: ",hashedPassword)
    const user= await  User.create({ 
        username,
        email,
        password: hashedPassword
    })

    console.log(`User Created: ${user}`)
    if (user) {
        res.status(201).json({_id: user.id, email: user.email})
    } else {
        res.status(400)
        throw new Error("User data not valid");
    }


   // res.json({message : "Register the user"})
} )


// login a user 
//@route POST /api/users/register
//@acces public
const loginUser = asyncHandler(async(req, res)=>{
    const {email, password} = req.body 
    if (!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const user = await User.findOne({email})
    //Compare password with hashedpassword
    if ( user && (await bcrypt.compare(password, user.password))) {
        const accesToken = jwt.sign({
            user : {
                user: user.username,
                email: user.email,
                id : user.id
            }, 
        }, 
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: "1m"})
        res.status(200).json({accesToken})
    } else {
        res.status(401);
        throw new Error("Email or Password is not valid");
        
    }
} )

// current user info
//@route GET /api/users/current
//@acces private
const CurrentUser = asyncHandler(async(req, res)=>{
    res.json({message : "Current user information"})
} )

module.exports = {registerUser,loginUser , CurrentUser }