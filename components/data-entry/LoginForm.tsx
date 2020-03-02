import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import defaultPage from "../../hocs/defaultPage";
import { setToken } from "../../utils/auth";
import { Row, Form, Icon, Input, Button, Alert } from 'antd';

type SigninProps = {
  form: any;
  isAuthenticated: string;
}

const apiUrl = process.env.API_BASE_URL || "http://localhost:1337";

class SigninForm extends React.Component<SigninProps> {
  state = {
    authError: false
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios
          .post(`${apiUrl}/auth/local`, {
            identifier: values.email,
            password: values.password,
          })
          .then(response => {
            // Handle success.
            console.log('Well done!');
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);
            setToken(response.data);
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
    const { authError } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        {(authError === true) && 
          <Form.Item>
            <Alert 
              message="Email ou mot de passe incorrect" 
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
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Row type="flex" justify="center" align="middle">
          <Button type="primary" htmlType="submit">
            Se connecter
          </Button>
        </Row>
      </Form>
    )
  }
}

const Signin = Form.create({ name: 'signin' })(SigninForm);
export default defaultPage(Signin)