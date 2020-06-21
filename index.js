let env = process.env.NODE_ENV || 'development'


let settings = require('./config/settings')[env]

const express = require('express')
var cors = require('cors')
const sgMail = require("@sendgrid/mail");
const app = express()
const path = require('path'); 
const bodyParser = require('body-parser')
require('dotenv').config()
var nodemailer = require('nodemailer');

app.use(cors()) 


if (process.env.NODE_ENV === 'production') {
	app.use(express.static('pizzakhazana-react/build'));
}

// app.get('*', (request, response) => {
// 	response.sendFile(path.join(__dirname, 'pizzakhazana-react', 'build', 'index.html'));
// });

// app.get('*', function (req, res) {
//     const index = path.join(__dirname, 'pizzakhazana-react/build', 'index.html');
//     res.sendFile(index);
//   });

app.use(cors()) 
app.use(bodyParser.json())


app.get('/contactus', (req,res) => {
    const {email, message} = req.body
    console.log("in backend")
    console.log(email)
    console.log(message)
    var transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
               user: 'pizzakhazana@yahoo.com',
               pass: process.env.PASSWORD
           }
       });

       const mailOptions = {
        from: email, // sender address
        to: 'pizzakhazana@yahoo.com', // list of receivers
        subject: 'Contact', // Subject line
        html: `<div style=" border: 1px solid #000;
                    width: 250px;
                    text-align: center;
                     padding: 1rem;">
                     <p style=" margin: 0;
                     padding-bottom: 1rem;">from : ${from}</p>
                     <p style=" margin: 0;
                     padding-bottom: 1rem;">${message}</p>
                     </div>`
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if(err){
            console.log(err)
        }
        else{
            console.log(info)
        }
     })
})

app.get('/admin/orders/pending', (req,res) => {
    const {to, id, price} = req.query
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'USER EMAIL',
               pass: 'PASSWORD'
           }
       });

       const mailOptions = {
        from: 'SENDER EMAIL', // sender address
        to: to, // list of receivers
        subject: 'Order details', // Subject line
        html: `<div style=" border: 1px solid #000;
                         width: 250px;
                         text-align: center;
                         padding: 1rem;">
                       <h3>Thanks for ordering pizza from pizzaKhazana...</h3>
                       <p style=" margin: 0;
                         padding-bottom: 1rem;">Your order id : ${id} is approved</p>
                       <p style=" margin: 0;
                         padding-bottom: 1rem;">Please ready with cash ₹ ${price}</p>
                    </div>`
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if(err){
            console.log(err)
        }
        else{
            console.log(info)
        }
     })
})


require('./config/database')(settings)
require('./config/express')(app)
require('./config/routes')(app)
require('./config/passport')()

app.use(cors()) 


app.listen(settings.port)
console.log(`Server listening on port ${settings.port}...`)
console.log(process.env.MY_NAME) 