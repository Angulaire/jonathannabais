async function fetchApi(endpoint, data) {
  const res = await fetch(`${process.env.ACTIVECAMPAIGN_API_URL}/api/3/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Api-Token': process.env.ACTIVECAMPAIGN_API_KEY
    },
    body: JSON.stringify(data)
  })
  return res
}

export default async function(req, res) {
  const { email, firstName, lastName, message } = req.body
  const listId = 6

  try {
    const resCreateContact = await fetchApi('contact/sync', {
      contact: {
        email,
        firstName,
        lastName,
      }
    })
    const { contact } = await resCreateContact.json()

    // Add the new contact to list
    await fetchApi('contactLists', {
      contactList: {
        list: listId,
        contact: parseInt(contact.id),
        status: 1
      }
    })

    // Add message as a contact note
    await fetchApi('notes', {
      note: {
        note: message,
        relid: parseInt(contact.id),
        reltype: "Subscriber"
      }
    })

    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}