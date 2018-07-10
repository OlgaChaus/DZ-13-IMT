 var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: 'angelolya11@gmail.com',
pass: 'olechka1984'
}
});

var mailOptions = {
from: 'angelolya11@gmail.com',
to: 'angelolya11@gmail.com',
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
