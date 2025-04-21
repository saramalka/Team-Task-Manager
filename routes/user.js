const express=require("express")
const router=express.Router()
const User=require("../Models/User")

router.use(express.json())

router.get("/",(req,res)=>{
    res.send()
})

router.post("/",async(req,res)=>{
    const {name,password,email}=req.body
    if(!name|!password|!email)
        res.status(404).json({error:true, message:"name,password and email are required"})
    const user=await User.create({name,password,email})
    res.json(user)
})

module.exports=router