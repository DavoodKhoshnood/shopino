import express from 'express';
import Order from '../models/orderModel.js';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js';
import { isAuth } from '../utils.js'

const orderRouter = express.Router();

orderRouter.post('/', isAuth, expressAsyncHandler(async (req, res) => {
    const newOrder = new Order({
        orderItems: req.body.orderItems.map((item)=> ({ ...item, product: item._id })),
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
    })

    const order = await newOrder.save()
    res.status(201).send({ message: 'New Order Created', order})
}));

orderRouter.get(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      console.log('order::', order);
      if (order) {
        res.send(order);
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );


export default orderRouter;