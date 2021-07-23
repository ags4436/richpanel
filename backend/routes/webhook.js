const router = require('express').Router();

let User = require('../models/login.model');


router.route('/').get((req,res)=>{
  let mode = req.query['hub.mode'];
  let token=req.query['hub.verify_token'];
  let challenge=req.query['hub.challenge'];
  if(token=="673HBABABBA123"){
      res.status(200).send(challenge);
  }
});

router.route('/').post((req,res)=>{
    let body = req.body;

    // Check the webhook event is from a Page subscription
    if (body.object === 'page') {
  
      // Iterate over each entry - there may be multiple if batched
      body.entry.forEach(function(entry) {
  
        // Get the webhook event. entry.messaging is an array, but 
        // will only ever contain one event, so we get index 0
        let webhook_event = entry.messaging[0];
        console.log(webhook_event);
        
      });
  
      // Return a '200 OK' response to all events
      res.status(200).send('EVENT_RECEIVED');
  
    } else {
      // Return a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404);
    }
});

module.exports = router;