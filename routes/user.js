const express=require("express")
const router=express.Router()
const userController=require("../Controllers/userController")
const verifyToken=require("../config/verifyToken")
const isAdmin=require("../config/roleMiddelware")

router.use(express.json())

router.get("/",require(userController.getAllUsers))
router.post('/login', userController.login);
router.get('/me', verifyToken, userController.getMe);
router.get("/:id",require(userController.getUserByID))
router.post("/",require(userController.register))
router.put("/".require(userController.apdateUser))
router.delete("/",require(verifyToken, isAdmin, userController.deleteUser))


module.exports=router