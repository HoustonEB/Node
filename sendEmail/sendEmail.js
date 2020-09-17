"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    // secureConnection: true,
    auth: {
      user: "860852345@qq.com", // generated ethereal user
      pass: 'llxylunkfodnbdcj', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '860852345@qq.com', // sender address
    to: "860852345@qq.com,yuzhuang0428@rayootech.com", // list of recseivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<b>
    fjiowejfoiejwiofejwiofjioewjfioewjiofjeiowjfoiejwiofj</b>
    <img src="cid:01">
    <img src="https://upload.jianshu.io/users/upload_avatars/82327/4cbddc1e3b13.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    `,
    attachments: [
      {   // utf-8 string as an attachment
        filename: 'cat.jpg',
        path: '../files/cat.jpg', // stream this file
        cid: '01'
      },
      {   // utf-8 string as an attachment
        filename: 'file1.js',
        path: '../files/file1.js', // stream this file
        cid: '02'
      },
      {   // utf-8 string as an attachment
        filename: 'file2.xlsx',
        path: '../files/file2.xlsx', // stream this file
        cid: '03'
      },
      {   // utf-8 string as an attachment
        filename: 'file3.docx',
        path: '../files/file3.docx', // stream this file
        cid: '04'
      }
    ]
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
