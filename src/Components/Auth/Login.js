import React, { useEffect, useState } from "react"
import { history, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from "axios";

export default function Login() {
    const history = useNavigate()
    const [error, setError] = useState('')
   
    const onSumitHandle = async (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            let result = await axios.post('http://localhost:3001/api/v1/auth/login',{email: email, password: password})
            const {token, user,message} = result.data
            history('/dashboard')
        } catch (error) {
            setError(error.response.data.message || error.response.data.email)
        }
        
    }
    return (
        <div className="container h-[570px] flex justify-items-center items-center">
            {/* <form onSubmit={onSumitHandle}>
                <label>Email</label>
                <input placeholder="example@gmai.com"/><br/>
                <label>password</label>
                <input placeholder="password"/><br/>
                <label>Email</label>
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" value="Submit" type="submit"/><br/>
            </form> */}
            <div class="w-full max-w-xs mx-auto">
                <form onSubmit={onSumitHandle} class="bg-white border shadow-xl rounded px-8 pt-6 pb-8 mb-4">
                    <p className="font-bold text-center text-xl font-sans pb-12">To continue, Login to IMusic</p>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input 
                        // ref={(input) => {
                        //     this.getEmail = input;
                        // }}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="email" 
                        name="email"
                        type="text" 
                        required
                        placeholder="Username" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input 
                        // ref={(password) => {
                        //     this.getPassword = password;
                        // }}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                         id="password"
                         name="password"
                          type="password"
                          required
                           placeholder="******************" />
                        {/* <p class="text-black-500 text-xs italic">Please enter a password.</p> */}
                        <p class="text-black-500 text-xs text-red-700 italic">{error}</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="Submit">
                            Sign In
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>

        </div>
    )
}