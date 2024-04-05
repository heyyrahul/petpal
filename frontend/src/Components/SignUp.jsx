import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import login_picture from "../assets/pet3.jpg";
import '../CSS/Signup.css';

export default function Register() {
    const toast = useToast();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        pass: '',
        confirmPassword: '',
        age: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            return toast({
                title: "Password and confirm password should be the same",
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        }

        try {
            const res = await axios.post("https://petpals-4.onrender.com/users/register", formData);
            console.log(formData);
            toast({
                title: res.data.msg,
                status: "success",
                isClosable: true,
            });
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (err) {
            if (err.response && err.response.data) {
                toast({
                    title: err.response.data.err || "An error occurred",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                });
            }
        }
    };

    return (
        <div className='Regis'>
            <section>
                <div className="register">
                    <div className="col-1">
                        <h2 className='Sign'>Sign Up</h2>
                        <span className='Sign1'>Register and Enjoy the service</span>

                        <form
                            id='form'
                            className='flex flex-col'
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder='Username'
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email'
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder='Password'
                                required
                            />
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder='Confirm Password'
                                required
                            />
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder='Age'
                                required
                            />

                            <button className='btn' type="submit">Sign Up</button>
                        </form>
                    </div>
                    <div className="col-2">
                        <img src={login_picture} alt="Pet" />
                    </div>
                </div>
            </section>
        </div>
    );
}
