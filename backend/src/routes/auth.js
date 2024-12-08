import express from 'express';
import { check, validationResult } from "express-validator";
import User from '../models/user';
import bcrypt from "bcryptjs"

const router = express.Router();

router.post("/login", [ 
    check("email", "Email is required").isEmail(),
    check("password", "Password must be a minimum of 6 characters").isLength({
        min: 6,
    }),
], async (req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array()})
    }

    const { email, password } = req.body

    try {
        const user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({ message:"Invalid credentials"})
        }

        const passwordMatch = await brcypt.compare(password, user.password)
        if(!passwordMatch){
            return res.status(400).json({ message:"Invalid credentials"})
        }

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong"})
    }
});