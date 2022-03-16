import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const Signup = () => {

    const navigate = useNavigate();

    const checkDetail = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        if (data.get("password") === data.get("passwordConfirm") && data.get("username").length >= 5) {
            if (data.get("password").length < 8) {
                toast("Password too short !")
            } else {
                axios.post("http://localhost:5000/login/checkname", {
                    username: data.get("username")
                }).then((res) => {
                    console.log(res)
                    if (res.data.message === "success") {
                        axios.post("http://localhost:5000/login/new", {
                            username: data.get("username"),
                            password: data.get("password")
                        }).then((res) => {
                            swal({
                                title: "User created successfully",
                                icon: "success",
                                timer: 2000
                            });
                            navigate("/login")
                            // toast.error(err.response?.data?.message || err.message)
                        }).catch((err) => {
                            toast.error(err.response?.data?.message || err.message)
                            console.log(err.response)
                        })
                    }
                    else if (res.data.message === "failed") {
                        toast("User Already Exists")
                    }
                    // toast.error(err.response?.data?.message || err.message)
                }).catch((err) => {
                    console.log(err.response)
                })
            }
        }
        else {
            if (data.get("password") != data.get("passwordConfirm")) {
                toast("Password doesn't match")
            }
            else if (data.get("username").length < 5) {
                toast("Username too short")
            }
            else { }
        }

    }


    return (
        <div className='flex justify-center h-screen bg-gray-100'>

            <div className='mt-24 w-1/3 h-96 float-left bg-gray-200 box-shadow'>
                {/* <div className='pt-52 '>
                    <div className='flex justify-center'>
                    <img src={require('../images/download.jpg')}alt="LOGO" width="100px"></img>
                    </div>
                    <div className='flex justify-center font-bold text-2xl'>Signup to IMS</div>
                </div> */}
                <div className=''>
                    <div>
                        <form onSubmit={checkDetail}>
                            <div className='flex flex-col items-center m-4'>
                                <div className='text-3xl text-gray-500 justify-center'>Sign Up</div><hr />
                                <div className='text-gray-500 flex flex-col  m-4'>
                                    <label className=' '>Create Username</label>
                                    <input autoComplete="off" type="text" name="username" placeholder='Minimum 5 character' required className='rounded-md w-56 px-2 py-1  focus:outline-none focus:border-blue-400 border-2 mb-4 focus:shadow-lg' />
                                    <label>Choose Password</label>
                                    <input type="password" placeholder = "*******"name="password" required className='rounded-md w-56 px-2 py-1  focus:outline-none focus:border-blue-400 border-2 mb-4 focus:shadow-lg' />
                                    <label>Confirm Password</label>
                                    <input type="password" placeholder = "*******"name="passwordConfirm" required className='rounded-md w-56 px-2 py-1  focus:outline-none focus:border-blue-400 border-2 mb-4 focus:shadow-lg' />
                                    <button type="submit" className='button-blue'><i className="fa fa-user-plus"></i> Sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup