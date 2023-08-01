const mongoose = require('mongoose');


const model = require('../models/product')
const Product = model.product


//create
exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);

        const doc = await product.save();
        res.status(201).json(doc);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create product' });
    }
};

//READ

exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}

exports.getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
}

// UPDATE


//PUT
exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOneAndReplace({ _id: id }, req.body, { new: true });
        res.json(product);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

//PATCH
exports.updateProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.json(product);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOneAndDelete({ _id: id });
        res.json(product);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}
