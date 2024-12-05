import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

// Schema for the user collection in database
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }

});

// Middleware function for hashing password before saving it to the database
userSchema.pre("save", async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 8)
    }
    next();
}); 

// Create the model "User" using userSchema and assign it to the User variable
const User = mongoose.model("User", userSchema);

export default User