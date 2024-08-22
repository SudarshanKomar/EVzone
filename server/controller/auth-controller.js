const User=require("../modals/schema");
const bcrypt=require("bcrypt");




const register=async (req,res)=>{
    try{
        const {firstName,lastName,email,contact,password}=req.body;

        const userExist=await User.findOne({email: email});

        if(userExist){
            return res.status(400).json({msg:"email already exist"});
        }

        //hash the password
        // const saltRound=10;
        // const hash_password=await bcrypt.hash(password,saltRound);

        const userCreated=await User.create({firstName,lastName,email,contact,password});

        res.status(201).json({
            msg:"registration successful",
            token:await userCreated.generateToken(),
            userId:userCreated._id.toString(),
        });
    }
    catch(error){
        res.status(500).json("internal server error");
    }
}

const login=async(req,res)=>{
    try{
        const {email,password}=req.body;

        const userExist= await User.findOne({email});

        if(!userExist){
            console.log(error);
            return res.status(400).json({msg:"invalid credentials"});
        }

        const user=await bcrypt.compare(password,userExist.password);
        
        if(user){
            res.status(200).json({
                msg:"login successful",
                token:await userExist.generatedToken(),
                userId:userExist._id.toString(),
            });
        }
        else{
            res.status(401).json({msg:"invalid email or paasword"});
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json("internal server error");
    }
}

module.exports={register,login};