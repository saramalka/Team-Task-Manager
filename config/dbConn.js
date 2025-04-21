const mongoose=require('mongoose')
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DATA_BASE_URI)
    } 
    catch(err){
        console.log(`error conect DB ${err}`);
        
    }
}

module.exports=connectDB