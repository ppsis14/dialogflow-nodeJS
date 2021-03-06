// 'use strict';
require('dotenv').config()
// const line = require('@line/bot-sdk')
const express = require('express')
const bodyParser = require('body-parser')
// const request = require('request')
const webhookHandler = require('./handlers/webhookHandler.js')
// const csvtojson = require('csvtojson')
// listen on port
const port = process.env.PORT || 8000

// create Express app
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// to check error when connect hosting
app.get('/', (req, res) => {
    res.send({
        success: true,
        db_connect : "thikamporn simud"
    })
    // readFile('./1000datapoints.csv', 'utf-8', (err, fileContent) => {
    //     if(err) {
    //         console.log(err); // Do something to handle the error or just throw it
    //         throw new Error(err);
    //     }
    //     const jsonObj = csvjson.toObject(fileContent);

    //     res.send(jsonObj)
    //     // console.log(jsonObj);
    // });
    // csvtojson().fromFile("./1000datapoints.csv").then(source => {
        
    //     console.log(source);
    //     res.send(source)

    // })

    // res.send({
    //   success: true
    // });
    res.end()
})

// hadler when webhook was connect from dialogflow
app.post('/webhook', webhookHandler);

app.listen(port)
