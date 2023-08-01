const express = require('express');
const productRouter = express.Router();
const productController = require('../controller/product');

productRouter
  .post('/', productController.createProduct)
  .get('/', productController.getProducts)
  .get('/:id', productController.getProductById)
  .put('/:id', productController.updateProduct)
  .patch('/:id', productController.updateProductById)
  .delete('/:id', productController.deleteProduct);

module.exports = productRouter;
