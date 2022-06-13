import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    // const history = useNavigate()
    const onSubmitHandle = async (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const c_password = e.target.c_password.value
        const gender = e.target.gender.value
        const dob = e.target.dob.value
        const fname = e.target.fname.value
        const lname = e.target.lname.value
        console.log(email,fname,lname)
        let result = await axios.post('http://localhost:3001/api/v1/users',
            { 
                // body: JSON.stringify({
                //     email: email,
                //     password: password,
                //     lastName: lname,
                //     firstName: fname,
                //     dateofbirth:dob,
                //     gender: gender
                //  })
                
                    email: email,
                    password: password,
                    lastName: lname,
                    firstName: fname,
                    dateofbirth:dob,
                    gender: gender
                 
            })
        const user = result.data.filter((data) => data.email === email)
        if (user[0]) {
            // history('/dashboard')
        } else {
            // setError('Incorrect username or password')
        }

    }
    return (
        <div>
            <div class="container mx-auto">
                <div class="flex justify-center px-6 my-12">

                    <div class="w-full xl:w-3/4 lg:w-11/12 flex">

                        {/* <div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style={{backgroundImage: "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"}}
					></div> */}

                        <div class="border-2 mx-auto w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
                            <form onSubmit={onSubmitHandle} class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="mb-4 md:mr-2 md:mb-0">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                                            First Name
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            name="fname"
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="lastName"
                                            name="lname"
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                        Email
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="mb-4 md:mr-2 md:mb-0">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                            Password
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="******************"
                                        />
                                        <p class="text-xs italic text-red-500">Please choose a password.</p>
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                            Confirm Password
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="c_password"
                                            name="c_password"
                                            type="password"
                                            placeholder="******************"
                                        />
                                    </div>
                                </div>
                                {/* gender and dob field */}
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="mb-4 md:mr-2 md:mb-0">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                                            Date of Birth
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="dob"
                                            name="dob"
                                            type="date"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                                            Gender
                                        </label>
                                        {/* <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="lastName"
                                            name="lname"
                                            type="text"
                                            placeholder="Last Name"
                                        /> */}
                                        <select id="gender" name="gender" class="w-full border bg-white rounded px-3 py-2 outline-none">
                                            <option class="py-1">Male</option>
                                            <option class="py-1">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mb-6 text-center">
                                    <button
                                        class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Register Account
                                    </button>
                                </div>
                                <hr class="mb-6 border-t" />
                                <div class="text-center">
                                    <a
                                        class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="#"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                                <div class="text-center">
                                    <a
                                        class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="/login"
                                    >
                                        Already have an account? Login!
                                    </a>
                                </div>                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}