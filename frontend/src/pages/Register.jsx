import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import { registerNewUserReducer } from '../reducers/userReducer'
import { registerNewUser } from '../actions/userActions'


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpass, setCpass] = useState('')

    const dispatch = useDispatch()

    const register = (e) => {

        e.preventDefault(); // 

        const user = {
            name: name,
            email :email,
            password : password
        }

        if (password == cpass) {
            dispatch(registerNewUser(user))
        }
        else {
            alert("password not matched")
        }

    }

    return (
        <div className='flex items-center justify-center h-[80vh]' onSubmit={register}>


            <form className="p-10 w-[500px] ">
                <h1 className='w-full text-3xl text-center mb-5'>Register</h1>
                {/* name */}
                <label className='mb-7' htmlFor="name">Name</label>
                <br />
                <input type="text" id='name' className='border outline-none w-full rounded  p-2'
                    value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter your name' required/>
                <br />

                {/* email */}
                <label className='mb-7' htmlFor="email">Email</label>
                <br />
                <input type="email" id='email' className='border outline-none w-full rounded  p-2'
                    value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter your email' required/>
                <br />

                {/* pass */}
                <label className='mb-7' htmlFor="pass">Password</label>
                <br />
                <input type="password" id='pass' className='border outline-none w-full rounded  p-2'
                    value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password' required/>
                <br />

                {/* confirm pass */}
                <label className='mb-7' htmlFor="cpass">Confirm Password</label>
                <br />
                <input type="password" id='cpass' className='border outline-none w-full rounded  p-2'
                    value={cpass} onChange={(e) => { setCpass(e.target.value) }} placeholder='Confirm Password' required/>
                <br />


                <button type='submit' className=' cursor-pointer hover:bg-black hover:text-white border outline-none w-full rounded mt-8 p-2'>SUBMIT</button>
                <br /> <br />

                Already Registered <Link className='hover:underline' to="/login"> Login here</Link>

            </form>

        </div>
    )
}
export default Register