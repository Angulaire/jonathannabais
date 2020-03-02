import React from 'react'
import {
  Form,
  Input,
  Icon,
  Select,
  Row,
  Col,
  Upload,
  Button,
} from 'antd';

const { Option } = Select;

type ApplyProps = {
  form: any
}

class ApplyForm extends React.Component<ApplyProps> {
  state = {
    confirmDirty: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '33',
    })(
      <Select style={{ width: 70 }}>
        <Option value="33">+33</Option>
        <Option value="34">+34</Option>
      </Select>,
    );

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item
          label="Prénom & Nom"
        >
          {getFieldDecorator('fullname', {
            rules: [{ required: true, message: 'Veuillez entrer votre nom complet', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Adresse e-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'Le mail est incorrect !',
              },
              {
                required: true,
                message: 'Veuillez entrer votre mail',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Téléphone">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Veuillez entrer votre numéro de téléphone' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Message">
          {getFieldDecorator('message', {
            rules: [{ required: true, message: 'Expliquz vos motivations en quelques lignes' }],
          })(<Input.TextArea style={{ width: '100%', height: '160px' }} />)}
        </Form.Item>
        <Form.Item label="Votre CV">
          {getFieldDecorator('resume', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" size="large" block htmlType="submit">
            Postuler
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedApplyForm = Form.create({ name: 'apply' })(ApplyForm);

export default WrappedApplyForm