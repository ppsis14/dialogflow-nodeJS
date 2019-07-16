'use strict';
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
// const request = require('request')
// Import the appropriate class
const {WebhookClient} = require('dialogflow-fulfillment');
// listen on port
const port = process.env.PORT || 4000

// create Express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
  
app.get('/', (req, res) => {
    res.send({
      success: true
    });
})

app.post('/webhook', (req, res) => {
    console.log('POST: /');
    console.log('Body: ',req.body);
  
    //Create an instance
    const agent = new WebhookClient({request: req,response: res});
  
    //Test get value of WebhookClient
    console.log('agentVersion: ' + agent.agentVersion);
    console.log('intent: ' + agent.intent);
    console.log('locale: ' + agent.locale);
    console.log('query: ', agent.query);
    console.log('session: ', agent.session);
  
    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map();
    let str = "i'm sorry.";
    intentMap.set('BMI - custom - yes', str);
    agent.handleRequest(intentMap);

    res.end()
  });
  
  app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
  })
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
// app.listen(port)


