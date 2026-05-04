const User = require("../models/User.js")

async function getProfile (req, res){
    try{
    const id = req.user.id
    const existingUser = await User.findById(req.user.id).select("-password")
    res.status(200).json(existingUser)
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

module.exports = getProfile