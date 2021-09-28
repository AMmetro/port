const express = require('express');
const cors = require('cors');
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
// const { urlencoded } = require('body-parser');
const app = express()
let port = process.env.PORT || 3010
let smtp_login = process.env.smtp_login
let smtp_password = process.env.smtp_password
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



// create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service:"gmail",
    // secure: false, // true for 465, false for other ports
    // port: 25,
    // tls: {rejectUnauthorized:false},
    auth: {
    user: "a.mitskevich.metro@gmail.com", // generated ethereal user
    pass: "17FTruiQ2", // generated ethereal password
  },
});
  
app.get('/', (req, res) => {
  res.send('You are in My Portfolio ')
})

app.post('/sendEmail', async function (req, res) {
  let {name, mail, message} = req.body  
  console.log(req.body)

    // send mail with defined transport object
       await transporter.sendMail({
      from: '"Andrei 👻" <foo@example.com>', // sender address
      to: "a.mitskevich.metro@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      html: `<div>
                <b>Hello Andrei</b>
                <p>My name is ${name}</p>
                <p>my mail ${mail}</p>
                <p>message for you${message}</p>
                </div>`, // html body
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
