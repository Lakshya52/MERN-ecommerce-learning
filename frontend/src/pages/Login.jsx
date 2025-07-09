import React, {use, useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { loginUserReducer } from '../reducers/userReducer'
import { loginUser } from '../actions/userActions'



const Login = () => {

  
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      const dispatch = useDispatch()
      
          const login = (e) => {
      
              e.preventDefault(); // 
      
              const user = {
                  email :email,
                  password : password
              }
              dispatch(loginUser(user))
      
      
          }

          useEffect(()=>{
            if(localStorage.getItem('currentUser')){
                window.location.href = '/'
                
            }
          },[])
    
  return (
     <div className='flex items-center justify-center h-[80vh]'>
    
    
                <form className=" p-10  w-[500px] " onSubmit={login}>
                    <h1 className='w-full text-3xl text-center mb-5'>Login</h1>
                   
    
                    {/* email */}
                    <label className='mb-7' htmlFor="email">Email</label>
                    <br />
                    <input type="email" id='email' className='border outline-none w-full rounded  p-2'
                        value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter your email' />
                    <br />
    
                    {/* pass */}
                    <label className='mb-7' htmlFor="pass">Password</label>
                    <br />
                    <input type="password" id='pass' className='border outline-none w-full rounded  p-2'
                        value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password' />
                    <br />
    
    
                    <button type='submit' className=' cursor-pointer hover:bg-black hover:text-white border outline-none w-full rounded mt-8 p-2'>LOGIN</button>
                    <br /> <br />
    
                    Not Registered <Link className='hover:underline' to="/register"> Register here</Link>
    
                </form>
    
            </div>
  )
}

export default Login