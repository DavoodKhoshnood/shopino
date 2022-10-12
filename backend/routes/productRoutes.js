import express from 'express';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
})

productRouter.get('/slug/:slug', async (req, res) => {
    const { slug } = req.params;
    const product = await Product.findOne({slug: slug});
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send({ message: "Product not found!" });
    }
  });
  
  productRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(id, product);
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send({ message: "Product not found!" });
    }
  });

export default productRouter;