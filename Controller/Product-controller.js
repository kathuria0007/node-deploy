import mongoose from 'mongoose';
import { product } from '../Model/product.js';
// after over db connection , schema , model we dont need to read a file from json 
// const index=fs.readFileSync('index.html','utf-8')
// const data=JSON.parse(fs.readFileSync('data.json','utf-8'))
// const products=data.products;


export const  createproduct=(req,res)=>{
                                                                                    // res.send("hello")
                                                                                    // res.sendFile("E:\node text\text.txt");
                                                                                    // console.log(req.body);
                                                                                    // products.push(req.body)
                                                                                                                                                                 // console.log(p1);
                                                                                    // p1.title="Nokia"
                                                                                    // p1.description="the earliest and cheapest mobile phone"
                                                                                    // p1.price=152;
                                                                                    // p1.rating=5;
                                                                                    // p1.brand="Mera brand"

    const p1=new product(req.body);
    p1.save();
    res.json(req.body);
    
}

export const getproduct=async (req,res)=>{
    // res.send("hello")
    // res.sendFile("E:\node text\text.txt");
    // const data=await product.find({price: {$gt:500}});

    const data1=await product.find();
    res.json(data1)
}

export const getproductid= async (req,res)=>{
  // // res.send("hello")
  // // res.sendFile("E:\node text\text.txt")         
 // const id=+req.params.id;
 // const productbyid=products.find(p=>p.id===id)
   // res.json(productbyid)
   const  id=req.params.id;
   const data= await product.findById(id)                                                                                                                                                       
   res.json(data)
}

export const updateproduct = async (req,res)=>{
//     // res.send("hello")
//     // res.sendFile("E:\node text\text.txt");
//     // console.log(req.params.id);
//     // const id=+req.params.id;
//     // const productbyid=products.findIndex(p=>p.id===id)
//     // products.splice(products.productbyid,1,{...req.body, id:id})
//     // res.status(201).json();
    const id=req.params.id
    try
    {
     const updateddata=await product.findOneAndUpdate({_id:id},req.body)
    res.json(updateddata);
    // console.log(updateddata)
    }catch(err)
    {
        console.log(err);
    }
}

// export const updateproductbyid=(req,res)=>{
//     // res.send("hello")
//     // res.sendFile("E:\node text\text.txt");
//     console.log(req.params.id);
//     const id=+req.params.id;
//     const productbyid=products.findIndex(p=>p.id===id)
//     const product=products[productbyid];
//     products.splice(products.productbyid,1,{...product,...req.body, id:id})
//     res.status(201).json();
    
// }


export const deleteproduct=async (req,res)=>{
    // res.send("hello")
    // res.sendFile("E:\node text\text.txt");
    // console.log(req.params.id);
    
    // const productbyid=products.findIndex(p=>p.id===id)
    // products.splice(products.productbyid,1,{})
    // res.status(201).json();
    const id=req.params.id;
    const deleteddata=await product.deleteOne({_id:id})
    res.json(deleteddata);

}

