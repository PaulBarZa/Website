const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const details = require("./details.json")

const port = 3000;
const app = express();
app.use(cors({ origin: "*" })); // Is it dangerous ?
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("Server is running on port ", port);
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Server is running</h1>"
  );
});

app.post("/sendmail", (req, res) => {
  let user = req.body;
  sendMail(user, info => {
    res.send(info);
  });
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"Paul Barthe"<p.barthe441@hotmail.com>',
    to: `p.barthe441@hotmail.com, ${user.mail}`,
    subject: "Your message have been sent !",
    html: `<p>Hello ${user.name} !</p>
    <p>Your message have been delivered to me.<br>
    Thank you for it, I will respond to you as soon as possible on this email : ${user.mail} or this phone : ${user.phone}</p>
    <p>Best regards,</p>
    <p>Paul Barthe</p>
    <p>Message sent : "${user.message}"</p>`
};

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}
