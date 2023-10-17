import React from 'react'
import { useState } from 'react'
import { Form, Input } from 'antd';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "./style.scss"
import Newbiebg from '../../assets/loginbg.png'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mentee = () => {
  const [active, setActive] = useState('second');
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();


  const [formValues, setFormValues] = useState({
    First_Name: '',
    Last_Name: '',
    Phone_Number: '',
    Email: '',
    Expertise: '',
    Job: '',
  });

  const handleInputChange = (fieldName, value) => {
    setFormValues({ ...formValues, [fieldName]: value });
  };

  async function onSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const googleSheetsURL = 'https://script.google.com/macros/s/AKfycbyBqdI8ChZC-4ltmuHvbUiF4cfrTvRle2qac-YdZ-LYRhSuHwBNHdaxtHvATuClp1RE/exec';
    const formData = new FormData();

    // Append form values to formData
    for (const key in formValues) {
      formData.append(key, formValues[key]);
    }

    try {
      const response = await fetch(googleSheetsURL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Clear form values
        setFormValues({
          First_Name: '',
          Last_Name: '',
          Phone_Number: '',
          Email: '',
          Expertise: '',
          Job: '',
        });

        // Display a success message
        toast.success('Submitted successfully.');

        // Redirect to the home page
        navigate('/');
      } else {
        toast.info('Error submitting form data.');
      }
    } catch (error) {
      toast.error('Error: Try AGAIN', error);
    } finally {
      // Set loading back to false after form submission is completed
      setLoading(false);
    }
  }

  const generateTabClassName = (button) => {
    return active === button ? 'fpSubMainDataTab active' : 'fpSubMainAirtimeTab';
  };

  const handleClick = (button) => {
    setActive(button);
  };
  // const onChange = (value) => {
  //   console.log('changed', value);
  // };

  return (
    <div className='wait-container'>
      <div className='wait-form'>
        <h2 className='wait-heading'>Join our waiting list</h2>
        <p className='wait-p' >Ready to seize opportunities? Join our exclusive waiting list today and fast-track your career.</p>
        <p className='wait-text'>Choose Path</p>
        <div className='wait-tab'>
          <Link
            to="/waitlist"
            className={generateTabClassName('first')}
            onClick={() => handleClick('first')}
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span className='tab-text'>Mentor</span>
          </Link>
          <Link
            to="/waitlist/mentee"
            className={generateTabClassName('second')}
            onClick={() => handleClick('second')}
          >
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10.05 2.53004L4.03002 6.46004C2.10002 7.72004 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73004 19.98 6.47004L13.99 2.54004C12.91 1.82004 11.13 1.82004 10.05 2.53004Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5.63012 13.08L5.62012 17.77C5.62012 19.04 6.60012 20.4 7.80012 20.8L10.9901 21.86C11.5401 22.04 12.4501 22.04 13.0101 21.86L16.2001 20.8C17.4001 20.4 18.3801 19.04 18.3801 17.77V13.13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.3999 15V9" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></span>
            <span className='tab-text'>Mentee</span>
          </Link>
        </div>
        <form onSubmit={onSubmit}>
          <div className="p-0 grid xl:grid-cols-2 grid-cols-1 grid-row-1 gap-x-[26px]  form-container">

            <Form.Item
              className=""
              name="First_Name"
              label="First Name"
              rules={[
                {
                  type: "firstname",
                  message: "The input is not a valid First Name!",
                },
                {
                  required: true,
                  message: "Please input your First Name!",
                },
              ]}
              labelCol={{ span: 24 }}
            >
              <Input
                placeholder="Temitope"
                value={formValues.First_Name}
                onChange={(e) => handleInputChange('First_Name', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              className=""
              name="Last_Name"
              label="Last Name"
              rules={[
                {
                  type: "lastname",
                  message: "The input is not a valid Last Name!",
                },
                {
                  required: true,
                  message: "Please input your Last Name!",
                },
              ]}
              labelCol={{ span: 24 }}
            >
              <Input
                placeholder="Aiyegbusi"
                value={formValues.Last_Name}
                onChange={(e) => handleInputChange('Last_Name', e.target.value)}
              />
            </Form.Item>
            <div className="ant-form-phone">
              <label className="ant-form-item-phone" htmlFor="">
                Phone Number
              </label>
              <PhoneInput
                inputProps={{
                  name: "Phone_Number",
                  required: true,
                  autoFocus: true,
                }}
                value={formValues.Phone_Number}
                onChange={(value) => handleInputChange('Phone_Number', value)}
              />
            </div>
            <Form.Item
              className=""
              name="Email"
              label="Email"
              rules={[
                {
                  type: "email",
                  message: "The input is not a valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
              labelCol={{ span: 24 }}
            >
              <Input
                placeholder="temitopeaiyegbusi@gmail.com"
                value={formValues.Email}
                onChange={(e) => handleInputChange('Email', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              className=""
              name="Expertise"
              label="Area of Expertise"
              rules={[
                {
                  type: "lastname",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your Area of Expertise!",
                },
              ]}
              labelCol={{ span: 24 }}
            >
              <Input
                placeholder="Product Design"
                value={formValues.Expertise}
                onChange={(e) => handleInputChange('Expertise', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              className=""
              name="Job"
              label="Reason of Interest"
              rules={[
                {
                  type: "job",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your job title!",
                },
              ]}
              labelCol={{ span: 24 }}
            >
              <Input
                placeholder="Jobs"
                value={formValues.Job}
                onChange={(e) => handleInputChange('Job', e.target.value)}
              />
            </Form.Item>

          </div>
          <button
            type="submit"
            className={`rounded-[32px] bg-[#003CFF] py-5 px-8 text-sm font-semibold text-white shadow-sm ${loading ? 'loading' : ''}`}
          >
            {loading ? 'Loading...' : 'Join List'}
          </button>

        </form>
      </div>
      <div className="wait-pic ">
        <img className="pics" src={Newbiebg} alt="wait-pic" />
        <div onClick={() => {
          navigate("/");
        }} className='cancel'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 25 25" fill="none">
            <path d="M12.8574 22.8925C18.3803 22.8925 22.8574 18.4153 22.8574 12.8925C22.8574 7.36961 18.3803 2.89246 12.8574 2.89246C7.33457 2.89246 2.85742 7.36961 2.85742 12.8925C2.85742 18.4153 7.33457 22.8925 12.8574 22.8925Z" stroke="#e6e6e6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.8574 9.89246L9.85742 15.8925" stroke="#e6e6e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.85742 9.89246L15.8574 15.8925" stroke="#e6e6e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div onClick={() => {
        navigate("/");
      }} className='cancel1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 25" fill="none">
          <path d="M12.8574 22.8925C18.3803 22.8925 22.8574 18.4153 22.8574 12.8925C22.8574 7.36961 18.3803 2.89246 12.8574 2.89246C7.33457 2.89246 2.85742 7.36961 2.85742 12.8925C2.85742 18.4153 7.33457 22.8925 12.8574 22.8925Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15.8574 9.89246L9.85742 15.8925" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.85742 9.89246L15.8574 15.8925" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  );
}
export default Mentee