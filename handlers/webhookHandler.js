// const line = require('@line/bot-sdk');
// const config = require('../config.js');

// create LINE SDK client
// const client = new line.Client(config);

// const webhook = (req, res) => {
//     // console.log(`User id: ${req.body.events[0].source.userId}`);
//     res.sendStatus(200)
//     return Promise
//     .all(req.body.events.map(handleEvent))
//     .catch((err) => {
//         console.error(err + "handlerEnvet not pass");
//         res.status(503).end();
//     });
// };

const webhook = (req, res) => {
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
        // const agent = new WebhookClient({request: req, response: res});
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
}

module.exports = webhook;