const express = require("express");
const getProfile = require("../controllers/userController.js");
const protect = require("../middleware/authMiddleware.js");
const router = express.Router();
router.get("/profile", protect, getProfile)
module.exports = router