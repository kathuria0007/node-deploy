import express from 'express'
import productrouter from './routes/productRoutes.js'
import userrouter from './routes/userRoutes.js'
import {fileURLToPath} from 'url';
import mongoose, { Schema } from 'mongoose';
import path from 'path';
import cors from 'cors';
const str=process.env.PUBLIC_DIR
// import path from 'path';
// import { fileURLToPath } from 'url';


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// step1- dbconnection with the database 
main().catch((err)=>{console.log(err);})
async function main()
{
    await mongoose.connect("mongodb+srv://dheerajkathuria:Dheeraj%40123@cluster0.8faf8oe.mongodb.net/ecommerceDatabase?retryWrites=true&w=majority");
    console.log("successful connection");
}





// this one is for routing process
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name', __dirname);


const server=express();
server.use(cors())
server.use(express.json());
// server.use(express.static("E:\Node-app\build\static\index.html"))
// server.use("/build/index.html", express.static('/build/index.html'));
server.use(express.static(__dirname+'/build'))
server.use('/',productrouter)
server.use('/users',userrouter)
// this one is for the react routing how its understand with backend routing
server.use('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'));
})


server.listen(8083,()=>{console.log("Server Started");});
