const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const mongoUrl = "mongodb+srv://Mustujab:Mustujab1@cluster0.5grei.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
require('./Customers')
const Customers = mongoose.model("Customers")
require('./Foods')
const Foods = mongoose.model("Food")
require('./Cart')
const cart = mongoose.model("Cart")

app.use(bodyParser.json())

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("Connected to Mongodb Atlas")
})

mongoose.connection.on("error",(err)=>{
    console.log("error",err)
    return;
})


// -----------------CUSTOMER SIGNUP-----------------

app.post('/send-data',(req,res)=>{
    var cus = new Customers({
       FirstName: req.body.FirstName,
       LastName: req.body.LastName,
       email: req.body.email,
       PhoneNumber: req.body.PhoneNumber,
       Username: req.body.Username,
       password:req.body.password
    })
    cus.save()
    .then(data=>{
        console.log(data)
        res.send("Succesfully added data to database!")
    }).catch(err=>{
        console.log(err)
    })
})


app.post('/delete-data',(req,res)=>{
    Customers.findOneAndDelete(req.body.Username)
    .then(data=>{
        console.log(data)
        res.send("Succesfully deleted data from database!")
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/update-data',(req,res)=>{
//    if(Customers.findOne(req.body.Username)=== true){
    Customers.findOneAndReplace(req.body.Username,{
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        email: req.body.email,
        PhoneNumber: req.body.PhoneNumber,
        Username: req.body.Username,
        password:req.body.password
     },{upsert:false})
    .then(data=>{
        console.log(data)
        res.send("Succesfully updated data in database!")
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
//else {
  //  console.log("Username not founded in database!")
//}
//})

// --------FOODS ENTRY----------------


app.post('/food-entry',(req,res)=>{
    var food = new Foods({
        itemid:req.body.itemid,
        stock:req.body.stock,
        itemname:req.body.itemname,
        category:req.body.category,
        price:req.body.price
    })
    food.save()
    .then(data=>{
        console.log(data)
        res.send("Succesfully added food to database!")
    }).catch(err=>{
        console.log(err)
    })
})


app.post('/delete-food',(req,res)=>{
    Foods.findOneAndDelete(req.body.itemid)
    .then(data=>{
        console.log(data)
        res.send("Succesfully deleted food from database!")
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/update-food/:itemid',(req,res)=>{
    Foods.findOneAndUpdate(req.params.itemid,{
        stock:req.body.stock,
        price:req.body.price
     })
    .then(data=>{
        console.log(data)
      //  res.send("Succesfully updated food in database!")
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.get('/allfooditems',(req,res)=>{
    console.log("All food items:")
    var querry= {}
    var docs=Foods.find(querry)
    .exec(function(err,docs){
        if(err){
            res.send("Error has occured!");
        }
        else{
            console.log(docs);
            res.json(docs);
        }
    })
})

app.get('/fastfoods',(req,res)=>{
    console.log("All fast food items:")
    var querry= {category:/fast/i}
    var docs=Foods.find(querry)
    .exec(function(err,docs){
        if(err){
            res.send("Error has occured!");
        }
        else{
            console.log(docs);
            res.json(docs);
        }
    })
})

app.get('/snacks',(req,res)=>{
    console.log("All snack items:")
    var querry= {category:/snacks/i}
    var docs=Foods.find(querry)
    .exec(function(err,docs){
        if(err){
            res.send("Error has occured!");
        }
        else{
            console.log(docs);
            res.json(docs);
        }
    })
})


app.get('/beverages',(req,res)=>{
    console.log("All beverages:")
    var querry= {category:/beverages/i}
    var docs=Foods.find(querry)
    .exec(function(err,docs){
        if(err){
            res.send("Error has occured!");
        }
        else{
            console.log(docs);
            res.json(docs);
        }
    })
})


app.get('/desifoods',(req,res)=>{
    console.log("All desi food items:")
    var querry= {category:/desi/i}
    var docs=Foods.find(querry)
    .exec(function(err,docs){
        if(err){
            res.send("Error has occured!");
        }
        else{
            console.log(docs);
            res.json(docs);
        }
    })
})

app.get('/',(req,res)=>{
    res.send("Welcome to node js")
})

app.listen(3000,()=>{

    console.log("Server is running")
})