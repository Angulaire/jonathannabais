import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Row, Form, Icon, Input, Button, Alert } from 'antd';

type ForgottenPasswordProps = {
  form: any;
}

const apiUrl = process.env.API_BASE_URL || "http://localhost:1337";

class ForgottenPassword extends React.Component<ForgottenPasswordProps> {
  state = {
    authSuccess: false,
    authError: false
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios
          .post(`${apiUrl}/auth/forgot-password`, {
            email: values.email,
          })
          .then(response => {
            // Handle success.
            console.log('Your user received an email');
            this.setState({
              authSuccess: true,
            });
          })
          .catch(error => {
            // Handle error.
            console.log('An error occurred:', error);
            this.setState({
              authError: true,
            });
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { authSuccess, authError } = this.state
    return (
      <>
        {authSuccess ? (
          <Alert 
            message="Votre demande a bien été prise en compte. Vous allez recevoir un email pour créer un nouveau mot de passe." 
            type="success" 
          />
        ) : (
          <Form onSubmit={this.handleSubmit}>
            {(authError === true) &&
              <Form.Item>
                <Alert 
                  message="Email erroné ou compte inconnu" 
                  type="error" 
                />
              </Form.Item>
            }
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              })(
                <Input
                  type="email"
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Email"
                />
              )}
            </Form.Item>
            <Row type="flex" justify="center" align="middle">
              <Button type="primary" htmlType="submit">
                Envoyer
              </Button>
            </Row>
          </Form>
        )}
      </>
    )
  }
}

const ForgottenPasswordForm = Form.create({ name: 'forgottenPasswordForm' })(ForgottenPassword);
export default ForgottenPasswordForm