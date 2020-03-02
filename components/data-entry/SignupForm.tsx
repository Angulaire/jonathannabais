import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import { setToken} from "../../utils/auth";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';

type SignupProps = {
  form: any
}

const apiUrl = process.env.API_BASE_URL || "http://localhost:1337";

class SignupForm extends React.Component<SignupProps> {
  state = {
    confirmDirty: false,
    authError: false
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios
          .post(`${apiUrl}auth/local/register`, {
            username: `${values.firstName}${values.lastName}`,
            email: values.email,
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
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row type="flex" justify="center" align="middle">
          <Col xs={24} md={{ span: 11 }}>
            <Form.Item>
              {getFieldDecorator('firstName', {
                rules: [{ required: true, message: 'Please input your first name' }],
              })(
                <Input
                  placeholder="First Name"
                />,
              )}
            </Form.Item>
          </Col>
          <Col xs={24} md={{ span: 11, offset: 2 }}>
            <Form.Item>
              {getFieldDecorator('lastName', {
                rules: [{ required: true, message: 'Please input your last name' }],
              })(
                <Input
                  placeholder="Last Name"
                />,
              )}
            </Form.Item>
          </Col>
        </Row>
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
              }
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
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(
            <Input.Password
              type="password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(
            <Input.Password
              type="password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              onBlur={this.handleConfirmBlur} 
              placeholder="Confirm Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Row>
            <Checkbox>Je souhaite recevoir la newsletter</Checkbox>
          </Row>
          <Row>
            {getFieldDecorator('privacy', {
              rules: [{ required: true, message: "Veuillez accepter les condtions" }],
            })(
              <Checkbox>J'ai lu et j'accepte les CGU</Checkbox>
            )}
          </Row>
        </Form.Item>
        <Row type="flex" justify="center" align="middle">
          <Button type="primary" htmlType="submit">
            S'inscrire
          </Button>
        </Row>
      </Form>
    )
  }
}

const Signup = Form.create({ name: 'signup' })(SignupForm);
export default Signup