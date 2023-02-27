// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var nodemailer = require('nodemailer');
export default function handler(req, res) {
  const { method } = req;

  if (method==="POST"){
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>CompanyName: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure : false , 
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD
    },
    tls:{
      rejectUnauthorized:false
    }
  });
  // , kc_yaici@esi.dz, ka_sehili@esi.dz, km_amrouche@esi.dz, ks_sendjakeddine@esi.dz
  // setup email data with unicode symbols
  let mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL, // sender address
      to: 'ka_atoui@esi.dz, kc_yaici@esi.dz, ka_sehili@esi.dz, km_amrouche@esi.dz, ks_sendjakeddine@esi.dz', // list of receivers
      subject: req.body.subject, // Subject line
      text: 'Dear QTM Crypto?', // plain text body
      html: output // html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        // return  console.log('khra');
        return res.status(201).json({msg:'An Error has occured'});
      }
      // console.log('Message sent: %s', info.messageId);   
      // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

     return res.status(200).json( {msg:'Email has been sent'});
  });
  }
    
  }
  