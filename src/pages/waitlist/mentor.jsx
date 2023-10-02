import React from 'react'
import { useState } from 'react'
import { Form, Input, InputNumber } from 'antd';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const Mentor = () => {
  const [active, setActive] = useState('first');

  const generateTabClassName = (button) => {
    return active === button ? 'fpSubMainDataTab' : 'fpSubMainAirtimeTab';
  };

  const handleClick = (button) => {
    setActive(button);
  };
  const onChange = (value) => {
    console.log('changed', value);
  };
  return (
    <div>
      <div></div>
      <div>
        <h2>Join our waiting list</h2>
        <p>Ready to seize opportunities? Join our exclusive waiting list today and fast-track your career.</p>
        <p>Choose Path</p>
        <div className='fpSubMainTabs'>
          <div
            className={generateTabClassName('first')}
            onClick={() => handleClick('first')}
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z" stroke="#0A6CFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 17.99V14.99" stroke="#0A6CFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span className='fpTabText'>Mentor</span>
          </div>
          <div
            className={generateTabClassName('second')}
            onClick={() => handleClick('second')}
          >
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10.05 2.53004L4.03002 6.46004C2.10002 7.72004 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73004 19.98 6.47004L13.99 2.54004C12.91 1.82004 11.13 1.82004 10.05 2.53004Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5.63012 13.08L5.62012 17.77C5.62012 19.04 6.60012 20.4 7.80012 20.8L10.9901 21.86C11.5401 22.04 12.4501 22.04 13.0101 21.86L16.2001 20.8C17.4001 20.4 18.3801 19.04 18.3801 17.77V13.13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.3999 15V9" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></span>
            <span className='fpTabText'>Mentee</span>
          </div>
        </div>
        <div>
          <Form.Item
            className=""
            name="firstname"
            label="First Name"
            rules={[
              {
                type: "firstname",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your First Name!",
              },
            ]}
            labelCol={{ span: 24 }}
          // wrapperCol={{ span: 24 }}
          >
            <Input placeholder="Daniel" />
          </Form.Item>
          <Form.Item
            className=""
            name="lastname"
            label="Last Name"
            rules={[
              {
                type: "lastname",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your Last Name!",
              },
            ]}
            labelCol={{ span: 24 }}
          // wrapperCol={{ span: 24 }}
          >
            <Input placeholder="Adebimpe" />
          </Form.Item>
          <PhoneInput
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: true
            }}
          />
          <Form.Item
            className=""
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
            labelCol={{ span: 24 }}
          // wrapperCol={{ span: 24 }}
          >
            <Input placeholder="adebimpeomolasho@gmail.com" />
          </Form.Item>
          <Form.Item
            className=""
            name="expertise"
            label="Area of Expertise"
            rules={[
              {
                type: "lastname",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your Last Name!",
              },
            ]}
            labelCol={{ span: 24 }}
          // wrapperCol={{ span: 24 }}
          >
            <Input placeholder="Product Design" />
          </Form.Item>

          <Form.Item
            className=""
            name="expertise"
            label="Years of Experience"
            rules={[
              {
                type: "expertise",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your years of experience!",
              },
            ]}
            labelCol={{ span: 24 }}
          // wrapperCol={{ span: 24 }}
          >
            <InputNumber min={1} max={10} defaultValue={2} onChange={onChange} />
          </Form.Item>
        </div>
      </div>
    </div>
  )
}

export default Mentor