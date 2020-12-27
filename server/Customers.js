const mongoose = require('mongoose')


const customerSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique: true,
        required:true,
        index:true,
        sparse:true
    },
    Username:{
        type:String,
        unique: true,
        required:true,
        index:true,
        sparse:true

    },
    password:{
        type:String,
        required:true
    }
})
mongoose.model("Customers",customerSchema)