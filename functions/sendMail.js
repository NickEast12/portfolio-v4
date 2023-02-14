const sendgrid = require('@sendgrid/mail')
// Your API Key from Sendgrid

sendgrid.setApiKey(process.env.SENDGRID_KEY)

const message = {
  // Your authorized email from SendGrid
  from: process.env.SENDGRID_AUTHORIZED_EMAIL,
}

// exports.handler = async (req, res) => {
//   try {
//     if (req.method !== 'POST') {
//       res.json({ message: 'Try a POST!' })
//     }

//     if (req.body) {
//       message.to = req.body.email
//       message.subject = req.body.subject
//       message.text = req.body.text
//       message.html = req.body.text
//     }
//     const msg = {
//       to: 'test@example.com', // Change to your recipient
//       from: 'test@example.com', // Change to your verified sender
//       subject: 'Sending with SendGrid is Fun',
//       text: 'and easy to do anywhere, even with Node.js',
//       html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//     }

//     return sendgrid.send(msg).then(
//       () => {
//         res.status(200).json({
//           message: 'I will send email',
//         })
//       },
//       error => {
//         console.error(error)
//         if (error.response) {
//           return res.status(500).json({
//             error: error.response,
//           })
//         }
//       }
//     )
//   } catch (err) {
//     console.log(err)
//     return res.status(500).json({ message: 'There was an error', error: err })
//   }
// }

export default function handler(req, res) {
  const msg = {
    to: 'test@example.com', // Change to your recipient
    from: 'test@example.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sendgrid
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch(error => {
      console.error(error)
    })
}
