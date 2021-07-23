const router = require('express').Router();
let User = require('../models/login.model');
let Message = require('../models/message.model');

router.route('/').get((req,res)=>{
    User.find()
        .then(users => res.json(users))
        .catch(err=> res.status(400).json('Error: '+ err));
});

router.route('/message').get((req,res)=>{
    Message.find()
        .then(mess => res.json(mess))
        .catch(err=> res.status(400).json('Error: '+ err));
});


router.route('/add').post((req,res)=>{
    const name =req.body.name;
    const email=req.body.email;
    const newUser = new User({
    name,
    email
    });

    newUser.save()
        .then(()=>res.json('user Added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;