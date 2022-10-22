import express from 'express';
import Order from '../models/orderModel.js';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js';

const orderRuoter = express.Router();

orderRuoter.post('/', expressAsyncHandler(async (req, res) => {
    const order = new Order({

    })
}))


export default orderRuoter;