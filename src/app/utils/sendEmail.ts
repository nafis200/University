import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'nafisahamed200429@gmail.com',
      pass: 'ubjf sfbw zala solx',
    },
  });

  await transporter.sendMail({
    from: 'abrarmahmudnabil12@gmail.com', // sender address
    to, // list of receivers
    subject: 'Reset your password within ten mins!', // Subject line
    text: '', // plain text body
    html, // html body
  });
};


// stmp simple Mail transfer protocol

// simple setup

// 1. manage your google account.
// 2. Click security sidebar option
// 3. On 2-step-verification.
// 4. enter Two step verification and create App passwords
// when create new app give password:
//  ubjf sfbw zala solx

// use password into createTransport pass:

// use port 587 or 465 but 587 recommanded

// Now transport.sendMail 

// from, to
