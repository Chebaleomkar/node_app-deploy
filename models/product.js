
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  
    title:{ type : String,required : true , unique : true} ,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: { type :  Number , min : 0 , max : 5 , default : 0 },
    brand: String,
    category:String,
    thumbnail:String,
    images: [ String ]
});

exports.product = mongoose.model('product',productSchema);