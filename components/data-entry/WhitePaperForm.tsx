import React from 'react';
import { Row, Col, Form, Icon, Input, Checkbox, Select, Button } from 'antd';

const { Option } = Select;

type WhitePaperFormProps = {
  form: any
}

class WhitePaperForm extends React.Component<WhitePaperFormProps> {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
      }
    });
    // this.props.form.resetFields()
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Row type="flex" justify="center" align="middle">
          <Col xs={24} md={{ span: 11 }}>
            <Form.Item>
              {getFieldDecorator('firstName', {
                rules: [{ required: true, message: 'Please input your first name' }],
              })(
                <Input
                  placeholder="Prénom"
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
                  placeholder="Nom"
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
          <Col xs={24} md={{ span: 11 }}>
            <Form.Item>
              <Input
                type="compagnyName"
                prefix={<Icon type="shop" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Nom de l'entreprise"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={{ span: 11, offset: 2 }}>
            <Form.Item>
              <Input
                type="phone"
                prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Téléphone"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
          <Col xs={24} md={{ span: 11 }}>
            <Form.Item>
              <Select placeholder="Nombre d'employés">
                <Option value="50">moins de 50</Option>
                <Option value="50-500">entre 50-500</Option>
                <Option value="500-1000">entre 500-1000</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={{ span: 11, offset: 2 }}>
            <Form.Item>
              <Input
                type="website"
                prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Site web"
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          {getFieldDecorator('opt-in', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>J'accepte d'être contacté par Kernn</Checkbox>)}
          <Button type="primary" htmlType="submit" block>
            Envoyer
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedWhitePaperForm = Form.create({ name: 'white_paper' })(WhitePaperForm);

export default WrappedWhitePaperForm