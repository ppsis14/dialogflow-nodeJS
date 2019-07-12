'use strict';
require('dotenv').config()
// const line = require('@line/bot-sdk')
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
// const config = require('./config.js');
// const webhookHandler = require('./handlers/webhookHandler.js');

// listen on port
const port = process.env.PORT || 4000

// create Express app
const app = express();

// register a webhook handler with middleware
app.post('/webhook', (req, res) => res.sendStatus(200))
// app.post('/webhook', line.middleware(config), webhookHandler);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.post("/webhook", (req, res) => {
//    if (req.body.queryResult.parameters.account_information == "contact number"
//     && req.body.queryResult.parameters.account_information) {
//     var speech = "999999999";
//   }
//   else if (req.body.queryResult.parameters.account_information == "account number"
//     && req.body.queryResult.parameters.account_information) {
//     var speech = "9999999999999";
//   }
//   else if (req.body.queryResult.parameters.account_information == "DOB"
//     && req.body.queryResult.parameters.account_information) {
//     var speech = "1 Jan 2019";
//   }
//   else if (req.body.queryResult.parameters.account_information == "address"
//     && req.body.queryResult.parameters.account_information) {
//     var speech = " floor no 1 , Building no 1 , address";
//   }
//   return res.json({
//     fulfillmentText: "fulfillmentText",
//     fulfillmentMessages: [{
//       simpleResponses: {
//         simpleResponses: [{
//           "textToSpeech": "textToSpeech",
//           "displayText": speech
//         }]
//       }
//     }],
//     source: "webhook-sample"
//   });
// });

// app.get('/webhook', function (req, res) {
//     res.send('hello webhook');
//   });
app.listen(port)