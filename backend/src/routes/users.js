import express from 'express';
import User from '../models/user'
import jwt from "jsonwebtoken";

// Create a router instance
const router = express.Router();

// Registration route /api/users/register
router.post("/register", async(req,res) => {
    try {
        // Checks if user's email is already in database
        let user = await User.findOne({
            email: req.body.email,
        });

        if(user) {
            return res.status(400).json({ message: "User already exists"});
        }

        // If user does not exist, create a new user with data from request body
        user = new User(req.body)
        await user.save();
        // Create a JWT for the new user
        const token = jwt.sign(
            {userId: user.id},
            process.env.JWT_SECRET_KEY,
            {expiresIn: "1d"}
        
        );

        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge:86400000,
        })
        return res.sendStatus(200);
    } catch(error) {
        console.log(error);
        res.status(500).send({ message: "Something went wrong"})
    }
})

export default router;