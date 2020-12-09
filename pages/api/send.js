const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email, firstName, lastName, object, message } = req.body

  const content = {
    to: 'jonathan@angulaire.io',
    from: 'jonathan@angulaire.io',
    subject: `${firstName} ${lastName}: Contact Site Perso`,
    html: `
      <p>Name: ${firstName} ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Object: ${object}</p>
      <p>Message: ${message}</p>
    `
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    if (error.response) {
      console.error(error.response.body)
    }
    res.status(400).send('Message not sent.')
  }
}