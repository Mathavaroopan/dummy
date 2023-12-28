const mailer = require("nodemailer");

const transport = mailer.createTransport({
    service: "gmail",
    auth: {
        user: "roopanmathava7@gmail.com",
        pass: "rsxy gomn coxd whhn"
    }
})

const mailOptions  = {
    from: "roopanmathava7@gmail.com",
    to: "roopanmathava@gmail.com",
    subject: "Summa",
    text: "summa content"
}

transport.sendMail(mailOptions, (err, info) => {
    if(err){
        console.log(err.message)
    }else{
        console.log(info.response);
    }
})
