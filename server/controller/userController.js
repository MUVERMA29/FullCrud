const user  = require("../DB/models/userSchema");

//data in db
exports.register = async(req,res)=>{
    console.log(req.body)
    const {name,email,age,mobile,address,work} =req.body;
    
    if( !name || !email || !age || !mobile || !address || !work){
        
        return  res.status(404).json("Please fill all data")
    }
    try{
        const preuser = await user.findOne({email:email});
        console.log(preuser);

        if(preuser){
           return res.status(404).json("this user is alredy present")
        }else{
            const adduser = new user({
                name,email,age,mobile,address,work

            });
            await adduser.save();
            return  res.status(201).json(adduser);
            // console.log(adduser);
        }
    }
    catch (error){
        return res.status(404).json(error)

    }
}
// get user data
 exports.getdata = async(req,res)=>{
    try{
        const userdata =await user.find();
        res.status(201).json(userdata);
        console.log(userdata);

    }catch(error){
        return res.status(404).json(error)

    }
}

//get individual data
 exports.getUser = async(req,res)=>{
    try {
     console.log(req.params);
     const  {id} = req.params;
 
       const userindividual = await user.findById({_id:id});
       console.log(userindividual);
        return res.status(201).json(userindividual)
     
    } catch (error) {
     return res.status(404).json(error)
     
    } 
 }
//update user data by Id
exports.updateduser = async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await user.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
}
//delete user
exports.deleteuser = async(req,res)=>{
    try {
        const {id} = req.params;

        const deletuser = await user.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(404).json(error);
    }
}