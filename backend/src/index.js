import express from 'express';
import cors from 'cors';
import "dotenv/config";

const app = express();
// Converts the body of API requests to JSON automatically
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/api/test", async (req,res)=>{
    res.json({message:"test"});
});

app.listen(7000, ()=> {
    console.log("Server running on localhost:7000");
});