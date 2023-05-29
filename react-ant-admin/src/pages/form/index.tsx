
import React, { useEffect, useState } from "react";
// import {useHistore} from 'react-router-dom';
import { Link, Route, useNavigate } from "react-router-dom";
// import {push} from "react-router";
import "./index.less";
import {
  Input,
  Button, Checkbox, Form, Select,
} from "antd";

const RegistrationForm = (props) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const navigate = useNavigate();
  // const history = useHistore();
  console.log(666, props, navigate)
  const [name, setName] = useState("888");
  const [name2, setName2] = useState("66");
  // {
  //   username211:"666",
  //   selectValue3231:"Lucy",
  //   passwordddd:552324,
  //   remember:false
  // }
  useEffect(() => {
    // form.setFieldValue(() => {
    //   username211:"666",
    //   selectValue3231:"Lucy",
    //   passwordddd:552324,
    //   remember:false
    // })
    return () => {
      console.log(7777)
    }
  }, [])
  const inputChange = (e) => {
    setName(e.target.value);
    setName2(e.target.value);
  }
  const goBack = () => {
    window.history.back()
  }
  const goPath = () => {
    navigate('/details/person?qq=12')
  }
  const goPath2 = () => {
    navigate('/details/person', { state: { a: 1, b: 2 } })
  }
  const goPath3 = () => {
    navigate('/details/person?aa=33', { state: { a: 1, b: 2 } })
  }
  const inputValidator = (valid,val) => {
    // if(val.length > 5){
    //   console.log(555)
    // }
    // console.log(val)
  }
  const validForm = () => {
    form.validateFields().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    }) 
    console.log(form)
  }
  const validForm2 = () => {
    form.resetFields();
  }
  const validForm3 = () => {
    console.log(form.getFieldsValue())
  }
  const validForm4 = () => {
    form.setFieldsValue({username211: 55})
  }
  return (
    <div>
      <Input value={name} onChange={(e) => inputChange(e)} />
      <Input value={name2} onChange={(e) => inputChange(e)} />
      {/* /details/person */}
      <Link
        to={{
          pathname: '/details/person',
          // state: {  // 页面跳转要传递的数据，如下
          //   //  name:11,  
          // }
        }}

      >link</Link>
      <span onClick={() => { goPath() }}>编程式跳转1</span>
      <span onClick={() => { goPath2() }}>编程式跳转2</span>
      <span onClick={() => { goPath3() }}>编程式跳转3</span>
      <span onClick={() => goBack()}>返回上一页</span>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username23"
          name="username211"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
            // {
            //   validator:inputValidator,
            // }
            {
              validator: (_, value) =>
                value&&value.length>10 ? Promise.reject(new Error('Should accept agreement')) : Promise.resolve(),
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="select"
          name="selectValue3231"
          rules={[
            {
              required: true,
              message: 'pleact select',
            },
          ]}
        >
          <Select
            style={{
              width: 120,
            }}
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'Yiminghe',
                label: 'yiminghe',
              },
              {
                value: 'disabled',
                label: 'Disabled',
                disabled: true,
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Passwordsd"
          name="passwordddd"
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Button onClick={() => validForm()}>form表单校验</Button>
      <Button onClick={() => validForm2()}>清空form表单校验</Button>
      <Button onClick={() => validForm3()}>获取form表单数据</Button>
      <Button onClick={() => validForm4()}>修改form表单数据</Button>
    </div>
  );
}

export default RegistrationForm;

RegistrationForm.route = {
  [MENU_PATH]: "/form/index",
  [MENU_LAYOUT]: 'FULLSCREEN'
};
