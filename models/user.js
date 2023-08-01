const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

    firstName: { type: String, required: true, unique: true, max: 16 },
    lastName: { type: String, max: 16 },
    age: { type: Number, min : 0 ,  max : 100 },
    email: { type: String, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, required: true, unique: true, },
    address: {
        pincode: { type: Number , required: true },
        street: { type: String , required : true },
        phone : {type : String , length : 10 }
      }
});

exports.user = mongoose.model('user', userSchema);