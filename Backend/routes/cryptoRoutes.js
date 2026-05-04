const express = require("express")
const router = express.Router();
const  {getAllCrypto, getGainers, getNewListings, addCrypto} = require("../controllers/cryptoController.js");


router.get("/", getAllCrypto);
router.get("/gainers", getGainers);
router.post("/", addCrypto);
router.get("/new", getNewListings )

module.exports = router;