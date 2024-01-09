
const mongoose = require("mongoose");

const DB="mongodb+srv://MuskanV:<password>@cluster0.d1ufkut.mongodb.net/<DB_name>?retryWrites=true&w=majority";

mongoose.connect(DB,{
    // userCreateIndex:true,
    // userfindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));



// {
//     "name": "muskan",
//     "email": "vermamusu2@gmail.com",
//     "age": "21",
//     "mobile": "8976545678",
//     "address": "mumbai",
//     "work": "developer"
// }
