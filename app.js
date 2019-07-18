// 'use strict';
require('dotenv').config()
// const line = require('@line/bot-sdk')
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const config = require('./DBconfig.js/index.js');
const webhookHandler = require('./handlers/webhookHandler.js')
// Import the appropriate class
const {WebhookClient} = require('dialogflow-fulfillment')
// listen on port
const port = process.env.PORT || 4000

// create Express app
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// to check error when connect hosting
app.get('/', (req, res) => {
    res.send({
      success: true
    });
})

// hadler when webhook was connect from dialogflow
app.post('/webhook', webhookHandler);

app.listen(port)
