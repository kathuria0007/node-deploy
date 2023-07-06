import * as fs from 'fs'
import path from 'path';
import {fileURLToPath} from 'url';
// const index=fs.readFileSync('index.html','utf-8')


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// // console.log('directory-name', __dirname);


// const data=JSON.parse(fs.readFileSync(path.resolve(__dirname,'data.json'),'utf-8'))
// const users=data.users;


export const createproduct=(req,res)=>{
    // res.send("hello")
    // res.sendFile("E:\node text\text.txt");
    console.log(req.body);
    users.push(req.body)
    res.json(users)
}

export const getproduct=(req,res)=>{
    // res.send("hello")
    // res.sendFile("E:\node text\text.txt");
    res.json(users)
}

export const getproductid=(req,res)=>{
    // res.send("hello")
    // res.sendFile("E:\node text\text.txt");
    console.log(req.params.id);
    const id=+req.params.id;
    const productbyid=users.find(p=>p.id===id)
    res.json(productbyid)
}

export const updateproduct =(req,res)=>{
    // res.send("hello")
    // res.sendFile("E:\node text\text.txt");
    console.log(req.params.id);
    const id=+req.params.id;
    const productbyid=users.findIndex(p=>p.id===id)
    users.splice(users.productbyid,1,{...req.body, id:id})
    res.status(201).json();
    
}

export const updateproductbyid=(req,res)=>{
    // res.send("hello")
    // res.sendFile("E:\node text\text.txt");
    console.log(req.params.id);
    const id=+req.params.id;
    const productbyid=users.findIndex(p=>p.id===id)
    const product=users[productbyid];
    users.splice(users.productbyid,1,{...product,...req.body, id:id})
    res.status(201).json();
    
}


export const deleteproduct=(req,res)=>{
    // res.send("hello")
    // res.sendFile("E:\node text\text.txt");
    console.log(req.params.id);
    const id=+req.params.id;
    const productbyid=users.findIndex(p=>p.id===id)
    users.splice(users.productbyid,1,{})
    res.status(201).json();
    
}

