const sendGridMail = require('@sendgrid/mail')

const handler = async event => {
  try {
    const data = JSON.parse(event.body)
    const { name, email, company, message } = data
    sendGridMail.setApiKey(process.env.SENDGRID_KEY)
    const html = `
      <div>
         <h4>A message from ${name}</h4>
         <p><strong>Company:</strong> ${company}</p>
         <p><strong>Email:</strong> ${email}</p>
         <br />
         <div>
          <p>${message}</p>
         </div>
      </div>
    `
    const msg = {
      to: `${process.env.SENDGRID_AUTHORIZED_EMAIL}`, // Change to your recipient
      from: `${process.env.SENDGRID_AUTHORIZED_EMAIL}`,
      subject: 'A new email from your website 🚀',
      text: `A new message from ${name}`,
      html,
    }
    await sendGridMail
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
