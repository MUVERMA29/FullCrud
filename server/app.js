
require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('./DB/models/userSchema');
const cors =require('cors');
const router=require("./routes/router");

require('./DB/conn');


const port= 8080;

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(port, ()=>{
    console.log(`server is running port ${port} number`);
});