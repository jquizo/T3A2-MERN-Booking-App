import express from 'express';
import User from '../models/user'
import jwt from "jsonwebtoken";

// Create express router instance
const router = express.Router();

// User registration POST route
router.post("/register", async(req,res) => {
    try {
        // Checks if email is already in database
        let user = await User.findOne({
            email: req.body.email,
        });
        // If user is already in database, send message "User already exists"
        if(user) {
            return res.status(400).json({ message: "User already exists"});
        }

        // If User does not exist, create user instance using data from request body
        user = new User(req.body)
        // Then save the user to the database
        await user.save();

        // Generates a JSON web token for the user
        const token = jwt.sign(
        {
            userId: user.id
        }, 
            process.env.JWT_SECRET_KEY,
        { 
            expiresIn:"2d"
        }
        );

        // Sets the cookie to HTTP only
        res.cookie("auth_token", token, {
            httpOnly: true,
            // Sends a HTTPS cookie only in production
            secure: process.env.NODE_ENV === "production",
            maxAge: 172800000,
        })
        return res.sendStatus(200);
    } catch(error) {
        res.status(500).send({ message: "Something went wrong"})
    }
})

export default router;