import express from 'express';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js';
import bcrypt from 'bcryptjs';

const userRuoter = express.Router();

userRuoter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email })
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user),
                })
                return;
            }
        }
        res.status(401).send({ message: 'Invalid email or password' })
    })
)

export default userRuoter;