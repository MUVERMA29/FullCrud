const express= require('express');
const router = express.Router();
const {register, getdata, getUser, deleteuser, updateduser}= require('../controller/userController.js');
const user = require('../DB/models/userSchema.js');



// router.get("/",(req,res)=>{
//     console.log("connected");
// });

router.post("/register",register);

router.get("/getdata",getdata);

router.get("/getuser/:id",getUser);

router.patch("/updateuser/:id", updateduser);
// delete user
router.delete("/deleteuser/:id", deleteuser);


module.exports =router;