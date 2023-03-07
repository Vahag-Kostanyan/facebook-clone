const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json())
app.use(cors());


const routes = require("./routes/index")
const PORT = process.env.PORT || 5500;

mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("db connected successfully"))
.catch(error => console.log(error));




app.use("/", routes);

app.listen(PORT, () => console.log("server started successfully"));