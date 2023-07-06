import React, { useState } from 'react'
import productsdata from './data.js'
import axios from 'axios'
export default function AddProductLists() {
   
    const[products,setProducts]= useState(productsdata)
    async function getProducts(){
              const data=await axios.get("https://localhost:8083/products");
              console.log(data);
    }
    
    useEffect(()=>{getProducts},[])

  return (
    <div>
      {
        // products.map((product,index))
      }
    </div>
  )
}
