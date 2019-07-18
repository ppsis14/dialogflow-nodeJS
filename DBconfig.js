// const config = {
//     channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
//     channelSecret: process.env.LINE_CHANNEL_SECRET,
//     verify: true,
// };
// module.exports = config;
// const DBconfig = {
//     root : '',

// };

// module.exports = DBconfig;

const csvtojson = require('csvtojson')
// const FileSystem = require('fs')

csvtojson().fromFile("./1000datapoints.csv").then(source => {
    console.log(source);
})

module.exports = csvtojson