const dotenv = require('dotenv');
dotenv.config();


const development = {
    name:'development',
    asset_path:'./assets',
    session_cookie_key:'dfjks56rwe6r42424',
    db:'askme_devlopment',
    smtp:{
        service:'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'askme.2317', // generated ethereal user
          pass: 'urg#50475Y', // generated ethereal password
        }
    },
    google_client_id:"37258179448-86lepei0i2n73ni1a5j2730pt0d0445t.apps.googleusercontent.com",
    google_client_secret:"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",
    google_callback_url:"http://localhost:8000/user/auth/google/callback",
    jwt_secret_key:'askme'

}

const production = {
    name:'production',
    asset_path:process.env.CHATTER_ASSET_PATH,
    session_cookie_key:process.env.CHATTER_SESSION_SECRET_KEY,
    db:process.env.CHATTER_DB,
    smtp:{
        service:'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.CHATTER_GMAIL_USERNAME, // generated ethereal user
          pass: process.env.CHATTER_GMAIL_PASS, // generated ethereal password
        }
    },
    google_client_id:process.env.CHATTER_GOOGLE_CLIENT_ID,
    google_client_secret:process.env.CHATTER_GOOGLE_CLIENT_SECRET_KEY,
    google_callback_url:process.env.CHATTER_GOOGLE_CLIENT_CALLBACK_URL,
    jwt_secret_key:process.env.CHATTER_JWT_SECRET_KEY
}

console.log(process.env.CHATTER_ENVIRONEMENT)
// console.log( eval(echo CHATTER_ENVIRONEMENT) == undefined ? development : eval(echo CHATTER_ENVIRONEMENT))
// development
// eval(process.env.CHATTER_ENVIRONEMENT) == undefined ? development : eval(process.env.CHATTER_ENVIRONEMENT);
module.exports =eval(process.env.CHATTER_ENVIRONEMENT) == undefined ? development : eval(process.env.CHATTER_ENVIRONEMENT); ;