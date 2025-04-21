const express=require("express")
const cors=require("cors")
const corsOptions=require("./config/corsOptions")

const app=express()
const PORT=process.env.PORT||2000

app.use(cors(corsOptions))
app.use("/api/task", require("./routes/task"))

app.get('/',(req,res)=>{
    res.send("Hello world!!")
})

app.listen(PORT, ()=>console.log(`server running on ${PORT}`))