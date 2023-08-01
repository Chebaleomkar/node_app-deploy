
const fs = require('fs');
const express = require('express');
const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const product = data.products;
const server = express();
const morgan = require('morgan');


// middleware

//body parser
server.use(express.json())

// url encoded



// third party middleware : morgan
server.use(morgan('default'))


// end of morgna use
// static 
server.use(express.static('public'))


// server.use((req,res,next)=>{
//    // console.log(req.method , req.ip , req.hostname)
//    next()
// })

const auth = (req,res,next)=>{
   // console.log(req.query );
   // if(req.body.password === '123'){
   //    next()
   // }else{
   //    res.sendStatus(401)
   // }
   next();  
}


// server.use(auth)

//API -  EndPoint - Route
server.get('/product/:id',auth, (req, res) => {
   console.log(req.params)
   res.json({ type: 'GET' });
})

server.post('/',auth, (req, res) => {
   res.json({ type: 'POST' });
})
server.put('/', (req, res) => {
   res.json({ type: 'PUT' });
})

server.delete('/', (req, res) => {
   res.json({ type: 'DELETE' });
})

server.patch('/', (req, res) => {
   res.json({ type: 'PATCH' });
})

server.get('/demo', (req, res) => {

   res.status(201).send('<h1>hello, its demo page </h1>');

   // res.sendFile( )
   // res.json(product)
   // res.sendStatus(404):
})




server.listen(8080, () => {
   console.log('server started')
});