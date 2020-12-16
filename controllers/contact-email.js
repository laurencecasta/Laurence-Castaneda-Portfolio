const nodemailer = require('nodemailer');
const {body, validationResult} = require('express-validator');

exports.validate = (method) => {
  switch (method) {
    case 'contactSubmission': {
      return [
        body('name', 'Name is required').notEmpty(),
        body('email', 'Email is required').notEmpty(),
        body('email', 'Please enter your email in the form: name@example.com').isEmail(),
        body('message', 'Message is required').notEmpty()
      ]
    }
    default :
    return null;
  }
}

exports.post_email = async (req, res) => {
  try {
    // validate data
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "laurence.d.castaneda@gmail.com",
        pass: "Yummyfood11",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    
    const output = `
    <h1>Someone has contacted you!</h1>

    <h2>Here's the details...</h2>
    <h4>Name: </h4><span>${req.body.name}</span>
    <h4>Email: </h4><span>${req.body.email}</span>
    <h4>Message: </h4>
    <p>${req.body.message}</p>
    `

    // setup email data with unicode symbols
    const mailOptions = {
      from: '"Portfolio Contact Submission" <laurence.d.castaneda@gmail.com>', // sender address
      to: "larrycasta11@gmail.com", // list of receivers
      subject: `Contact Form Message from ${req.body.name}`, // Subject line
      text: "", // plain text body
      html: output, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
    console.log(req.body);
    res.json(req.body);
  } catch (e) {
    console.log(e)
  }
}