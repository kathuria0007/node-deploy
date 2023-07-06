import express from 'express'
import { createproduct,getproduct,getproductid,updateproduct,updateproductbyid,deleteproduct } from '../Controller/User-Controller.js';


const route=express.Router();


route
.post('/',createproduct)
//Read GET /products -- api for rea
.get('/',getproduct)
// Read GET /products/:id    --   
// by req.params
.get('/:id',getproductid)
// Update PUT /products/:id    --   
// by req.params
.put('/:id',updateproduct)
// Update PATCH  /products/:id    --  but its not override its changes only those things that we passes  
// by req.params
.patch('/:id',updateproductbyid)
// Delete   DELETE  /products/:id    --   
// by req.params
.delete('/:id',deleteproduct)


export default route;