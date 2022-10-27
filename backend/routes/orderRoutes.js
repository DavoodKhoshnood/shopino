import express from 'express';
import Order from '../models/orderModel.js';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js';
import { isAuth } from '../utils.js'

const orderRuoter = express.Router();

orderRuoter.post('/', isAuth, expressAsyncHandler(async (req, res) => {
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
}))


export default orderRuoter;