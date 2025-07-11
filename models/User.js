// mongoose import - MongoDB database se interact karne ke liye & to define schema
import mongoose from 'mongoose';

// bcrypt import - password hash karne ke liye



// User schema define karna hai
const userSchema = new mongoose.Schema ({

    firstName : {
        type: String,
        
        trim: true, // removes whitespaces
    },

    lastName : {
        type: String,
       
        trim: true,
    },

    email : {
        type: String,
       
        trim: true,
        unique: true, // 2 users can not have same email
        lowercase: true,
        // match: REGEX doubt
    },

    mobile: {
        type: String,
        
        unique: true,
        trim: true,
        // match: REGEX doubt
    },

    gender: {
        type: String,
        
        enum: ["male", "female", "other"], // enum : user defined data types -- in radio box later
    },

    languages: {
        type: String,
        enum: ['c', 'laravel', 'node', 'express'], // enum : user defined data types -- in checkbox later
    },

    country: {
        type: String,
        
        enum: ['India', 'USA', 'Canada', 'UK', 'Australia', 'Germany', 'Japan', 'Other']
    },

    resume: {
        type: String, // Will store the path to the uploaded resume file
        default: "",
    },

    password: {
        type: String, // Will store the hashed password
    },

})










// Method to generate fullName
userSchema.pre('save', function(next)
{
    if(this.firstName && this.lastName)
    {
        this.fullName = `${this.firstName} ${this.lastName}`;
    }

    next(); // tells mongoose that this hook work is completed, and now doc can be saved
});


// convert user schema to MongoDB model to use CRUD operations / database store
const User = mongoose.model('github', userSchema);


// exporting User model to use it anywhere in our project
export default User;
