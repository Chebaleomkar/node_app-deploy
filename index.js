const express = require('express');
const server = express();
server.use(express.json());
const fs = require('fs');
const mongoose = require('mongoose');
const cors = require('cors');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const path = require('path');


// Connect to the database here
const databaseUrl = 'mongodb+srv://omkarchebale0:qrDubs61qDie08sF@cluster0.zlph7ra.mongodb.net/Ecommerce';
mongoose.connect(databaseUrl);

main().catch(err => console.log(err));

async function main() {
  console.log('database connected');
  // Any other async setup or initialization can go here
}

//Schema 


// Middleware
server.use(cors());
server.use(express.static('build'));
server.use('/product', productRouter);
server.use('/users', userRouter);
server.use( '*' , (req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'));
});

server.listen(8080, () => {
  console.log('Server started');
});
