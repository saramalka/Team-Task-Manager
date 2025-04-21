const express=require("express")
const router=express.Router()
const Team = require("../Models/Team");


router.use(express.json())

router.get("/",(req,res)=>{

    res.send("Team")
})

router.post("/", async (req,res)=>{
const {name,createdBy,members} = req.body
if(!name|!createdBy|!members)
    res.status(404).json("name , members and createdBy are required")
const task = await Team.create({name,createdBy,members});
res.json(task)
})

module.exports=router