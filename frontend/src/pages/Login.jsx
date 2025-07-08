import React, {useState} from 'react'
import { Link } from 'react-router-dom'


const Login = () => {

  
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
    
  return (
     <div className='flex items-center justify-center h-[80vh]'>
    
    
                <form className=" p-10  w-[500px] ">
                    <h1 className='w-full text-3xl text-center mb-5'>Login</h1>
                   
    
                    {/* email */}
                    <label className='mb-7' htmlFor="email">Email</label>
                    <br />
                    <input type="email" id='email' className='border outline-none w-full rounded  p-2'
                        value={email} onchange={(e) => { setEmail(e.target.value) }} placeholder='Enter your email' />
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