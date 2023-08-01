
const fs = require('fs');
const express = require('express');
const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.product;
const server = express();

//body parser
server.use(express.json())


server.get('/', (req, res) => {
  res.send( '<h1>hello coders </h1>');
});

// create POST /products
server.post('/products',(req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
})

// Read:  API endpoint to retrieve products
server.get('/products', (req, res) => {
  res.json(products);
});

server.get('/products/:id', (req, res) => {
    const id = +req.params.id
   const product =  products.find(p=>p.id === id)
  res.json(product);
});

// update PUT /products/:id <---OVERWRITE
server.put('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id === id);
    products.splice(productIndex,1,{...req.body,id : id})
    res.status(201).json();
})


// update -PATCH            <--- NOT OVERWRITE
server.patch('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id === id);
    const product = products[productIndex];

    products.splice(productIndex,1,{...product,...req.body});
    res.status(201).json(product);
})

// DELETE  /product/:id
server.delete('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id === id);
    const product  = products[productIndex];
    products.splice(productIndex,1);
    res.status(200).json(products)
})



server.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
