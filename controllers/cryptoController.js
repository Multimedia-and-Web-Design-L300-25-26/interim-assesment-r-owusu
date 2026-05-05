const crypto = require("../models/Crypto.js")
async function getAllCrypto(req, res){
    try{
  const cryptos = await  crypto.find()
  res.status(200).json(cryptos)
}
catch(error){
    res.status(500).json(error.message)
}
}

async function getGainers (req, res){
        try{
  const cryptos = await  crypto.find().sort({change: -1})
  res.status(200).json(cryptos)
}
catch(error){
    res.status(500).json(error.message)
}
}


async function getNewListings (req, res){
         try{
  const cryptos = await  crypto.find().sort({createdAt: -1})
  res.status(200).json(cryptos)
}
catch(error){
    res.status(500).json(error.message)
}
}


async function addCrypto (req, res){
    try{
    const name = req.body.name
    const symbol = req.body.symbol
    const price = req.body.price
    const image =  req.body.image
    const change = req.body.change
    const newCrypto = new crypto ({name, symbol, price, image, change})
    await newCrypto.save();
    res.status(201).json({message: "Crypto Created Successfully"})
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

module.exports = {getAllCrypto, getGainers, getNewListings, addCrypto}