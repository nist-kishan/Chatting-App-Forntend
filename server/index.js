const express =require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const userRoutes=require('./routes/userRouter')

const app=express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/api/auth',userRoutes)

mongoose.connect(process.env.MONGO_URL,{}).then(()=>{
    console.log("Server connected successfully...")
}).catch((err)=>{
    console.log(err)
})

const server=app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}/`)
})