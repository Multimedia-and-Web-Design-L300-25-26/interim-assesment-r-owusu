const User = require("../models/User");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
async function register (req, res){
    try{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const existingUser = await User.findOne({email: email})
    if(existingUser){
        res.status(400).json({ message: "User already exists" })
    }
    else {
          const hashedPassword = await bcrypt.hash(password, 10)
          console.log(hashedPassword)
        const newUser = new User({name, email,password: hashedPassword})
        await newUser.save()
        res.status(201).json({message: "User created successfully"})
    }
}
catch(error){
    console.log(error.message)
    res.status(500).json({message: "Something went wrong"});
}
}

async function login (req, res){
    try{
    const email = req.body.email
    const password = req.body.password
    const existingUser = await User.findOne({email: email})

if(!existingUser) {
         return   res.status(400).json({message: "USER NOT FOUND"});
}


const passwordMatch = await bcrypt.compare(password, existingUser.password)



    if(!passwordMatch){
  return res.status(400).json({ message: "Invalid credentials" })
}
const token= jwt.sign({id: existingUser._id}, process.env.JWT_SECRET, {expiresIn: "7d"})
   res.cookie("token", token, {httpOnly: true })
   res.status(200).json({message: "lOGIN SUCCESSFUL"})
   
}

catch(error){
       console.log(error.message)
    res.status(500).json({message: "Something went wrong"});
}
}
module.exports = {register, login};
