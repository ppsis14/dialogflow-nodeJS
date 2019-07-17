// 'use strict';
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
// Import the appropriate class
const {WebhookClient} = require('dialogflow-fulfillment');
// listen on port
const port = process.env.PORT || 4000

// create Express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
  
app.get('/', (req, res) => {
    res.send({
      success: true
    });
})

app.post('/webhook', (req, res) => {
    if (req.body.queryResult.action == "BMI.BMI-custom.BMI-custom-yes") {
        const parameters = req.body.queryResult.parameters
        var height = parameters['height']
        var weight = parameters['weight']
        // res.send({
        //         //Test get value of WebhookClient
        //     bodysuccess: true,
        //     height: height,
        //     weight: weight
        //         // agentVersion: agent.agentVersion,
        //         // intent: agent.inten,
        //         // locale: agent.locale,
        //         // query: agent.query,
        //         // session: agent.session,
            
                    
        // });
        res.send({
            "fulfillmentMessages": [
                {
                  "text": {
                    "text": [
                      "เอ...ขอคิดแปปนึงนะ ว่าน้ำหนัก 64 และส่วนสูง 160 จะอ้วนหรือผอมดีน้าาา"
                    ]
                  },
                  "platform": "LINE"
                },
                {
                  "payload": {
                    "line": {
                      "packageId": "11538",
                      "stickerId": "51626519",
                      "type": "sticker"
                    }
                  },
                  "platform": "LINE"
                },
                {
                  "text": {
                    "text": [
                      "THIKAMPORN SIMUD"
                    ]
                  }
                }
              ]
        });
    }
        //Create an instance
        const agent = new WebhookClient({request: req, response: res});
        // res.send({
        //     //Test get value of WebhookClient
        //     bodysuccess: true,
        //     agentVersion: agent.agentVersion,
        //     intent: agent.inten,
        //     locale: agent.locale,
        //     query: agent.query,
        //     session: agent.session,
        // });

        // function stringTest(agent) {
        //     agent.add('My name is thikamporn');
        // }
        // console.log(req.body);
        
        // Run the proper function handler based on the matched Dialogflow intent name
        // let intentMap = new Map();
        // intentMap.set('BMI - custom - yes', stringTest);
        // agent.handleRequest(intentMap);
    
    res.end()
});
  
//   function stringTest(agent) {
//     agent.add(`My name is thikamporn`);
//   }

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


