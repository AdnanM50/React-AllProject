import React, { useState } from 'react';
import { Button, Modal, Checkbox, Form, Input } from 'antd';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Adjust the import statements based on your Firebase version
import Swal from 'sweetalert2';

const Modalcompo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleRegistration = async (values) => {
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;
      Swal.fire('Success!', 'You have successfully registered!', 'success');
      setIsModalOpen(false); // Close the modal after successful registration
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle the error as needed
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <Button type="primary" onClick={showModal}>
        Register
      </Button>
      <Modal title="Basic Modal"  open={isModalOpen}  onOk={handleOk} onCancel={handleCancel}>
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
          onFinish={handleRegistration}
        >
                                 <Form.Item
                                 label={<span style={{ color: 'orange', fontSize: '20px' }}>Your Name :</span>}
                                name="name"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your name!',
                                    },
                                ]}
                                >
                                <Input />
                                </Form.Item>
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
                                    {
                                        min:6,
                                        message: 'Please Set Atleast 6 charecter',
                                    }
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
                                    <span style={{ color: 'orange', fontSize: '16px'}}>SignUp</span>
                                </Button>

                           
                                </Form.Item>
                            </Form>
<div className='flex justify-center '>
                                    {/* <p>Already have an account?</p>
                                    <Button type="link" onClick={showModal}>
                                        Login
                                    </Button> */}
                                    |

 

</div>
      </Modal>

    </div>
  )
}

export default Modalcompo