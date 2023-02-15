const sendGridMail = require('@sendgrid/mail')

const handler = async event => {
  try {
    const { name, email, message } = JSON.parse(event.body).payload.data

    console.log(`name: ${name}, email: ${email}, message: ${message}`)

    sendGridMail.setApiKey(process.env.SENDGRID_API_KEY)
    // const html = `
    //   <div>
    //      Hi ${name}! <br><br>
    //      Thanks for getting in touch.
    //      We have received your message
    //      and one of our customer care
    //      representatives will get in
    //      touch shortly
    //      <br><br>
    //      Best <br>
    //      John Doe
    //   </div>
    // `
    // const mail = {
    //   from: process.env.SENDER_EMAIL,
    //   to: email,
    //   subject: 'We have received your message',
    //   html,
    // }
    // await sendGridMail.send(mail)
    const msg = {
      to: 'test@example.com', // Change to your recipient
      from: `${process.env.SENDGRID_AUTHORIZED_EMAIL}`,
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sendGridMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch(error => {
        console.error(error)
      })
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent' }),
    }
  } catch (error) {
    return { statusCode: 422, body: String(error) }
  }
}

module.exports = { handler }
