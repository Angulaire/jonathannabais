/** @jsx jsx */
import { jsx, Grid, Button} from 'theme-ui';
import { Form, Input, Select, Result } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const { Option } = Select;
const { TextArea } = Input;

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg }
      })
    }
  }
  
  const onFinish = async values => {
    console.log('Success:', values);
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      {!status.submitted ? (
        <Form
          name="contact"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          sx={{
            '.ant-form-item': {
              mb: '10px'
            }
          }}
        >
          <Grid columns={['1fr', '1fr 1fr']}>
            <Form.Item
              label="Prénom"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: 'Veuillez entrer votre prénom',
                },
              ]}
            >
              <Input placeholder="Neil"/>
            </Form.Item>

            <Form.Item
              label="Nom"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: 'Veuillez entrer votre nom',
                },
              ]}
            >
              <Input placeholder="Patel"/>
            </Form.Item>
          </Grid>
          <Form.Item
            label="Email"
            name="email"
            validateTrigger="onBlur"
            rules={[
              {
                type: 'email',
                message: 'Veuillez laisser un email correct',
              },
              {
                required: true,
                message: "Veuillez laisser votre email"
              }
            ]}
          >
            <Input addonBefore={<MailOutlined />} placeholder="neil@angulaire.io" />
          </Form.Item>
          <Form.Item
            label="Motif"
            name="object"
          >
            <Select placeholder="Selectioner un motif">
              <Option value="business">Business</Option>
              <Option value="date">Date</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[
              {
                required: true,
                message: 'Merci de laisser un message',
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="submit" sx={{ variant: 'primary', width: '100%' }}>
              {!status.submitting
                ? !status.submitted
                  ? 'Envoyer ma demande'
                  : 'Demande envoyé'
                : 'Envoi en cours...'}
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Result
          status="success"
          title="Le message a bien été envoyé"
          subTitle="Je vous recontacterai dans les plus brefs délais pour échanger de nos besoins mutuels"
        />
      )}
    </>
  );
};

export default ContactForm