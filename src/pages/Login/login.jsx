// import { Button, Form, Input, Row, Col } from "antd";
// import { useNavigate } from 'react-router-dom'
// import Newbiebg from '../../assets/loginbg.png'
// import "./style.scss"
// import { Link } from "react-router-dom";


// const Login = () => {
//   return (
//     <Row className='container'>
//       <Col className='left_container'>
//         {/* <img className='' src={Logo} alt='logo' /> */}
//         <h2 className='login_heading'>Sign In</h2>
//         <p className='login_text'>Please kindly enter your details.</p>
//         <div>
//           <LoginForm />
//         </div>
//       </Col>
//       <Col className='right_container'>
//         <img className='login_img' src={Newbiebg} alt='main-pic' />
//       </Col>
//     </Row>
//   )
// }

// export default Login;

// const LoginForm = () => {

//   const navigate = useNavigate()
//   const handleSubmit = (values) => {
//     console.log(values);
//     navigate('/home')
//   };


//   return (
//     <Form
//       name="basic"
//       labelCol={{ span: 8 }}
//       wrapperCol={{ span: 16 }}
//       style={{ maxWidth: 600 }}
//       autoComplete="off"
//       onFinish={handleSubmit}
//     >
//       <Form.Item
//         className="ant-email"
//         name="email"
//         label="Email"
//         rules={[
//           {
//             type: "email",
//             message: "The input is not valid E-mail!",
//           },
//           {
//             required: true,
//             message: "Please input your E-mail!",
//           },
//         ]}
//         labelCol={{ span: 24 }}
//       // wrapperCol={{ span: 24 }}
//       >
//         <Input placeholder="Enter your email address" />
//       </Form.Item>

//       <Form.Item
//         rules={[{ required: true, message: "Please input your password!", style: { marginTop: "-40px" }, }]}
//         className="ant-password"
//         name="password"
//         label="Password"
//         labelCol={{ span: 24 }}
//       // wrapperCol={{ span: 24 }}
//       >
//         <Input.Password
//           placeholder="Enter your password"
//         // iconRender={(visible) =>
//         //   visible ? <span>SHOW</span> : <span> HIDE</span>
//         // }
//         />
//       </Form.Item>
//       <Form.Item>
//         <Link to="/" className="login_form_forgot">Forgot Password?</Link>
//       </Form.Item>
//       <Form.Item wrapperCol={{}}>
//         <Button type="primary" className="logButton" htmlType="submit" >
//           Log in
//         </Button>
//       </Form.Item>
//       <Form.Item wrapperCol={{}}>
//         <Button type="" className="googleButton" htmlType="button" >
//           Sign up with Google
//         </Button>
//         <div className="register">Don’t have an account? <Link className="r_link" to="" > Register here</Link></div>
//       </Form.Item>
//     </Form>
//   );
// };


