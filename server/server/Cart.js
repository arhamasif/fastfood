const mongoose = require("mongoose");
require('./Customers')
const Customers = mongoose.model("Customers")
require('./Foods')
const Foods = mongoose.model("Food")



const CartSchema = new mongoose.Schema(

  {

    Username: {

      type: mongoose.Schema.ObjectId,
      ref: "Customers"

    },
    Orderid:{
        type:Number,
        unique:true,
        required:true
    },

    products: [

      {

        quantity: Number,

        name: String,

        price: Number

      }

    ],

    active: {

      type: Boolean,

      default: true

    },
    totalprice:Number,

    modifiedOn: {

      type: Date,

      default: Date.now

    }

  },

  { timestamps: true }

);

mongoose.model("Cart", CartSchema);
