import  { useContext, useState } from 'react'
// import bgImg from '../assets/img1.jpg'
import { useForm } from 'react-hook-form';
import login_picture from "../assets/pet2.jpg"
import { Link, useNavigate } from 'react-router-dom';
// import { authContext } from '../context/AuthContext';   
import '../CSS/Login.css'
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, get_USER_SUCCESS } from '../Redux/actionTypes';
export default function Login() {
  const[email,setEmail] = useState("");
  const[pass,setPass]=useState("");
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const toast = useToast()
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const state = useSelector(state=>state);
  const onSubmit = async () => {
    try{
      const data ={email,pass};
    let res =await fetch("https://petpals-4.onrender.com/users/login",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    let dataa= await res.json();
    console.log(dataa);
    
   
    if(res.ok){
      setTimeout(() => {
        navigate("/")
      }, 1500);
      const tok=localStorage.setItem("token",JSON.stringify(dataa.token));
      dispatch({ type: LOGIN_SUCCESS });
      toast({
        title: dataa.msg,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      dispatch({ type: get_USER_SUCCESS});
      console.log(res.data);
    }
    else{
      toast({
        title: dataa.msg,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
    
    }
    catch(err){
      console.log(err.res);
      if (err.res && err.res.status === 400) {
              toast({
                title: err.response.data.error,
                status: 'error',
                duration: 2000,
                isClosable: true,
              });
            } else if (err.response && err.response.status === 400) {
              toast({
                title: err.response.data.error,
                status: 'error',
                duration: 2000,
                isClosable: true,
              });
            } else {
              toast({
                title: 'An error occurred',
                status: 'error',
                duration: 2000,
                isClosable: true,
              });
            }
            dispatch({ type: LOGIN_FAILURE });
    }
    

  }
  //   const data = { email, pass };
  //   dispatch({ type: LOGIN_REQUEST });
  //   try {
  //     const res = await axios.post("https://petpals-4.onrender.com/users/login", data);
  //     console.log(data);
  //     console.log(res);
  //     dispatch({ type: LOGIN_SUCCESS });
  //     toast({
  //       title: res.data.msg,
  //       status: 'success',
  //       duration: 2000,
  //       isClosable: true,
  //     });
  //     dispatch({ type: get_USER_SUCCESS, payload: res.data.user });
  //     console.log(res.data);
  // 
  //  setTimeout(() => {
  //       navigate("/")
  //     }, 1500);
  //   } catch (err) {
  //     console.error(err);
  //     // Handle different error statuses
  //     
  //   }
  // };
  return (
    <div className='Regis'>
      <section>
        <div className="register">
          <div className="col-1">
            <h2 className="Sign">Login</h2>
            <span className="Sign1">login to meet your furry friend</span>

            <form id='form' className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <input type="email" {...register("email", { required: true })} placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
              {errors.email && <span style={{ color: "red" }}>
                Email is mandatory </span>}
              <input type="password" {...register("password")} placeholder='Password' onChange={(e)=>setPass(e.target.value)}/>
              <button className='btn'>Log In</button>
              {/* <Link to="/admin"><h1>Admin ?</h1></Link> */}
            </form>
          </div>
          <div className="col-2">
            <img src={login_picture} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}