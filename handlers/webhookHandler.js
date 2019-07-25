const webhook = (req, res) => {
    if (req.body.queryResult.action == "BMI.BMI-custom.BMI-custom-yes") {
        console.log(req.body);
        const parameters = req.body.queryResult.parameters
        // var height = parameters['height']
        // var weight = parameters['weight']
        
        res.send({
            "fulfillmentMessages": [
                {
                  "text": {
                    "text": [
                      "THIKAMPORN SIMUD from app.js"
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
                      "THIKAMPORN SIMUD from app.js"
                    ]
                  }
                }
              ]
        });
        res.end()
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
}

module.exports = webhook;