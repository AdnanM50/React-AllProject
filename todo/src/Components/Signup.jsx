
import { useEffect, useState } from 'react';

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import app from '../Firebase/fierbase';
import {  Modal } from 'antd';
import Swal from "sweetalert2";
import { Button, Checkbox, Form, Input } from 'antd';
const Signup = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user,setUser]= useState(null)
    console.log(user);

    
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
   
    const auth = getAuth(app);

    const HandlewithSignin =(values)=>{
        
        const auth = getAuth();
    signInWithEmailAndPassword(auth,values.email, values.password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        localStorage.setItem('user', JSON.stringify(user));
        Swal.fire("Success!", "You have successfully logged in!", "success");
         
       
       
    })
    .catch((error) => {
        console.log("🚀 ~ file: signup.jsx:43 ~ HandlewithSignin ~ error:", error)
        
    });

    }

    useEffect (()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser('nodata')
            }
          });
    },[ 
        auth,

        
    ])
  return (
    <div>

<Button type="primary" onClick={showModal}>
      signin
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    
           <h2 className="text-black font-bold text-4xl text-center ">User Sign In</h2>
                <p className="text-center text-normal text-amber-200 font-medium">Hey Enter Your Details To Sign In Your Account</p>
                        <Form
                                name="basic"
                                labelRow={{
                                span: 10,
                                }}
                                wrapperRow={{
                                span: 8,
                                }}
                                style={{
                                maxWidth: 500,
                                }}
                                initialValues={{
                                remember: true,
                                }}
                                onFinish={HandlewithSignin}
                            >
                                <Form.Item
                                label={<span style={{ color: 'orange', fontSize: '20px' }}>Your E-Mail</span>}
                                name="email"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your email!',
                                    },
                                ]}
                                >
                                <Input />
                                </Form.Item>
                               
                                <Form.Item
                                label={<span style={{ color: 'orange', fontSize: '20px' }}>PassWord</span>}
                                name="password"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your password!',
                                    },
                                ]}
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
                                    span: 24,
                                }}
                                >
                                <Button 
                                type="primary" htmlType="submit">
                                    <span style={{ color: 'orange', fontSize: '16px'}}>Sign In</span>
                                </Button>
                                {/* <Button 
                                type="primary" htmlType="submit">
                                    <span style={{ color: 'orange', fontSize: '16px'}}>Sign Out</span>
                                </Button> */}
                                </Form.Item>
                            </Form>
                            </Modal>
    </div>
  )
}

export default Signup
