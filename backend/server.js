const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { urlencoded, json } = require('body-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
let Message = require('./models/message.model');

const session = require('express-session')

require('dotenv').config();

const app=express()
const port=process.env.PORT || 5000;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie:{
        httpOnly:true,
        maxAge: parseInt(process.env.SESSION_MAX_AGE)
    }
}))

const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{useNewUrlParser: true ,useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB Connection Established!!!')
});



const userRouter = require('./routes/users');


app.use(morgan('dev')); // log every request to the console.
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json()); 

app.use('/users',userRouter);

app.get('/webhook', function(req, res) {
    if (req.query['hub.verify_token'] === process.env.VERIFY_TOKEN){
       console.log('webhook verified');
       res.status(200).send(req.query['hub.challenge']);
    } else {
        console.error('verification failed. Token mismatch.');
        res.sendStatus(403);
     }
  });
  
  app.post('/webhook', function(req, res) {
    //checking for page subscription.
    console.log(req.body);
    if (req.body.object === 'page'){
       
       /* Iterate over each entry, there can be multiple entries 
       if callbacks are batched. */
       req.body.entry.forEach(function(entry) {
       // Iterate over each messaging event
          entry.messaging.forEach(function(event) {
          if (event.postback){
             processPostback(event);
          } else if (event.message){
            const message =event.message.text;
            const newMessage = new Message({
                message
                });
                newMessage.save()
            .then(()=>res.json('user Added!'))
            .catch(err => res.status(400).json('Error: '+err));
            console.log(event.message.text)
          }
      });
    }); 
    res.sendStatus(200);
   }
  });
 
app.listen(port, ()=>{
    console.log(`Server is running in the port: ${port}`);
});