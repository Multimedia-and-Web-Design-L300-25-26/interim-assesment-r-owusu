const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const router = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const cookieParser = require("cookie-parser");
const cryptoRoutes = require("./routes/cryptoRoutes.js")
const cors = require("cors");



dotenv.config();
app.use(express.json())
app.use(cookieParser());


app.use(cors({
    origin: ["http://localhost:5173", "https://r-owusu-crypto-app.netlify.app"],
    credentials: true
}));

app.use("/api/auth", router)
app.use("/api/user", userRoutes)
app.use("/api/crypto", cryptoRoutes)
mongoose.connect(process.env.MONGO_DB_URI, {
    tls: true,
    tlsAllowInvalidCertificates: true
})
    .then(() => {
        console.log("Connection Successful");
        app.listen(process.env.PORT || 5000, () => console.log("Server started"))
    })
    .catch((error) => console.log(error.message))

