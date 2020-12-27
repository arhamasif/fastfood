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
function generateRandomString(length)
{
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*()';
    var random_string = '';
    if(length > 0){
      for(var i=0; i < length; i++){
          random_string += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    }
    return random_string;
}
    const vcode = generateRandomString(5);
    /* Jab user signup pe click karey or sari details check hojaen to database me enter krne se pehle aik verification ka
    page show ho aur udr 5 length ki string input karega user "vcode" jo neche create horahi hai. usko aik variable me store karao
    or vcode se check karado same hogi to database me store hojaega warna verification code dubara mangey.*/
    app.post('/send',(req,res) => {
        const output = `</p>Welcome to Fast Foods. We recieved a registration request on our app.</p>
        <u1>
        <li>Name: ${user.Username}</li>
        </u1>
        <h3>Message</h3>
        <p> Kindly enter this verification code in the app </p>
        <p> ${vcode}<p>
        `;
    });
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
    user: 'k181056@nu.edu.pk', // generated ethereal user
    pass: 'bingoregister./', // generated ethereal password
    },
    /* localhost par chalana ho to ye command uncommend krdena 
    tls:{
    rejectUnauthorized:false
    } */
    });
    // setup email data with unicode symbols
    let mailOptions = {
    from: '"Fast Foods" <k181056@nu.edu.pk>', // sender address
    to: user.email, // receiver
    subject: "Verification Email for Registration in Fast Foods", // Subject line
    text: "Hello user req.body.username We recieved a request for Registration of an account in our App Fast Foods. Kindly enter this Verification code in the App: ", // plain text body
    html: output, // html body
    }
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
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