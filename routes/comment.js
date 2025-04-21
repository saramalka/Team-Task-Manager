const express=require("express")
const router=express.Router()
const Comment=require("../Models/Comment")

router.post("/",async(req,res)=>{

    const {userId,taskId,content}=req.body
    if(!userId|!taskId|!content)
        res.status(400).send('userId,taskId,content are required')

    const comment=await Comment.create({userId,taskId,content})
    res.json(comment)

})

module.exports=router
