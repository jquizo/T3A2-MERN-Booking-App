import express from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

const app = express();
// Converts the body of API requests to JSON automatically
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(7000, ()=> {
    console.log("Server running on localhost:7000");
});