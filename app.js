const express = require('express')
const nodemailer = require("nodemailer");
const app = express()

let port = 5000 || process.env.PORT


app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.listen(port, ()=>{
    console.log('http://localhost:5000')
})


app.post('/', (req, res)=>{

    if(!req.body.mail){
        req.body.mail = 'auto8mailer@gmail.com'
        req.body.pass = '' // Security stuff :/
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: req.body.mail,
            pass: req.body.pass
        }
    })

    let mailOptions = {
        from: req.body.mail,
        to: req.body.to,
        subject: req.body.title,
        html: req.body.html
    }

    transporter.sendMail(mailOptions, (err, data)=>{
        if(err)
            res.end("ERROR, if you're using own mail, you need turn on this : https://www.google.com/settings/security/lesssecureapps")
        else
            res.end('Mail sended!')
    })
})
