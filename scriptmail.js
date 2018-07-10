 var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: 'mail@gmail.com',
pass: 'password'
}
});

var mailOptions = {
from: 'mail@gmail.com',
to: 'mailmail@gmail.com',
subject: 'Sending Email using Node.js',
text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
