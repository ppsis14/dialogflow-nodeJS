require('dotenv').config()
// const config = {
//     channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
//     channelSecret: process.env.LINE_CHANNEL_SECRET,
//     verify: true,
// };
// module.exports = config;
// const DBconfig = {
//     root : '',

// };

const mysqlConfig = {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PWD,
    database : process.env.DB_NAME
}

module.exports = mysqlConfig;
