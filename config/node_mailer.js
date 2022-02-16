const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');



//This transporter means that which mail service and mailer id we use to send the email

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'askme.2317',
        pass: 'urg#50475Y'
    }
});
//This rendertemplate is used to pass the template to the user and here we use the template engine called as ejs
let renderTemplate = (data,relativePath) =>{
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,template){
            if(err){console.log("Error in rendering the template");return;}

            mailHTML = template;
        }
    )


    return mailHTML;
}

module.exports = {
    transporter:transporter,
    renderTemplate:renderTemplate
}