// 'use strict';
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
// Import the appropriate class
const {WebhookClient} = require('dialogflow-fulfillment');
// listen on port
const port = 4000
const db = require('./handlers/DBHandler.js')

// create Express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
  

console.log(db);

// to check error when connect hosting
app.get('/', (req, res) => {
    res.send({
      success: true,
      db_connect : "thikamporn"
    })
})

app.post('/webhook', (req, res) => {
    if (req.body.queryResult.action == "BMI.BMI-custom.BMI-custom-yes") {
        const parameters = req.body.queryResult.parameters
        // var height = parameters['height']
        // var weight = parameters['weight']
        
        res.send({
            "fulfillmentMessages": [
                {
                  "text": {
                    "text": [
                      "THIKAMPORN SIMUD"
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

app.listen(port)


