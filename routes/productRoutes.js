import express from 'express'
import { createproduct,getproduct,getproductid} from '../Controller/Product-controller.js';
import { updateproduct ,deleteproduct} from '../Controller/Product-controller.js';

// getproduct,getproductid,updateproduct,updateproductbyid,deleteproduct
const Proute=express.Router();


Proute
.post('/add',createproduct)


// Read GET /products -- api for read
.get('/get',getproduct)
// // Read GET /products/:id    --   
// // by req.params
.get('/get/:id',getproductid)
// // Update PUT /products/:id    --   
// // by req.params
.put('/update/:id',updateproduct)
// // Update PATCH  /products/:id    --  but its not override its changes only those things that we passes  
// // by req.params
// .patch('/:id',updateproductbyid)
// // Delete   DELETE  /products/:id    --   
// // by req.params
.delete('/delete/:id',deleteproduct)


export default Proute;