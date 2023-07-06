import mongoose, { Schema } from 'mongoose';




// step 1 is connection that is done in index.js 
//step=2 making a schema in mongoose everything is a schema who modifies the collection
// same as defining its datatypes
const productSchema = new Schema({
    title: {type:String},
    description: String,
    price:{ type:Number,required:true},
    discountPercentage: Number,
    rating:{type:Number,min:[1,"Poor Rating"],max:[5,"Excellennt rating"]},
    stock: Number,
    brand: String,
    category:String,
    images:String
  });

//step-3 is make a model its instance define as a document in over database
export const product = mongoose.model('product', productSchema);
