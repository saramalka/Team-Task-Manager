const express=require("express")
const router=express.Router()
const Task = require("../Models/Task");

router.use(express.json())

router.get("/",(req,res)=>{

    res.send("Task")
})

router.post("/", async (req,res)=>{
const {title,teamId} = req.body
const task = await Task.create({title,teamId});
res.json(task)
})

module.exports=router