const jwt = require("jsonwebtoken")
function protect(req, res, next){
    const token = req.cookies.token
    try{
if(!token){
    res.status(401).json({message: "Not authorised"})
}
else{
    const verify =  jwt.verify(token, process.env.JWT_SECRET)
   req.user = verify
   next()

}
    } 
    catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = protect