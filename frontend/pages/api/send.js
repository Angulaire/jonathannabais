const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email, firstName, lastName, object, message } = req.body

  const content = {
    to: 'arnaud@angulaire.io',
    from: 'arnaud@angulaire.io',
    subject: `${firstName} ${lastName}: Contact Site Perso`,
    html: `<p>${message}</p>`
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