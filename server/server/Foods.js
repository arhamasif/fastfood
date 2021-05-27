const mongoose = require('mongoose');



const FoodSchema = new mongoose.Schema({

  itemid: {

      type:Number,
      unique:true,
      required:true,
      validate(value) {

        if (value = 0) throw new Error("Item ID is neccesary.");

      }

  },

    itemname: {

    type: String,
    unique:true,
    required: true,
    trim: true,
  },

  category: {

    type: String,
    required: true,
    trim: true,
    lowercase:true

  },

  price: {

    type: Number,
    default: 0,
    validate(value) {

      if (value < 0) throw new Error("Price cannot be less than zero.");

    }

  },

  stock: {

    type: Number,
    default: 0,

    validate(value) {

      if (value < 0) throw new Error("Stock cannot be less than zero.");

    }

  },

});

mongoose.model("Food", FoodSchema)
