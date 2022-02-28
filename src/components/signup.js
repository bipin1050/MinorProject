import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Signup = () => {

    const handleSubmit = (e) => {

    }

    const [isUsernameOk, setIsUsernameOk] = useState(false);
    const [isPasswordOk, setIsPasswordOk] = useState(false);

    const navigate = useNavigate();
    

    const checkDetail = (e) =>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        if(data.get("password") === data.get("passwordConfirm")){
            toast("Signed successfully")
            setIsPasswordOk(true);
        }
        else{
            toast("Password doesn't match")
        }

        axios.post("http://localhost:5000/",{
            username: data.get("username"),
            password: data.get("password")
        }).then((res)=>{
            navigate("mainpage")
            // toast.error(err.response?.data?.message || err.message)
        }).catch((err)=>{
            toast.error(err.response?.data?.message || err.message)
            console.log(err.response)
        })
    }


    return (
        <div className=''>
            <div className='w-2/3 float-left'>
                <img src={require('../images/ims.jpg')} className ='h-screen w-full' alt="LOGO" ></img>
            </div>
            <div className='w-1/3 h-screen float-left bg-zinc-800 text-white'>
                <div className='pt-52 '>
                    <div className='flex justify-center'>
                    <img src={require('../images/download.jpg')}alt="LOGO" width="100px"></img>
                    </div>
                    <div className='flex justify-center font-bold text-2xl'>Signup to IMS</div>
                </div>
                <div className='flex justify-center text-2xl'>
                    <div>
                        <form onSubmit={checkDetail}>
                            <div>
                                <br />
                                <label>Create Username</label>
                                <br/>
                                <input autoComplete="off" type = "text" name ="username" placeholder='Minimum 5 character' required className='rounded-lg bg-zinc-500 focus:outline-none focus:ring-4'/>
                                <br /><br/>
                                <label>Enter Password</label>
                                <br/>
                                <input type="password" name="password"  required className='rounded-lg bg-zinc-500 focus:outline-none focus:ring-4'/>
                                <br /><br />
                                <label>Confirm Password</label>
                                <br/>
                                <input type="password" name="passwordConfirm"  required className='rounded-lg bg-zinc-500 focus:outline-none focus:ring-4'/>
                            </div>
                            <br/><br/>
                            <div className='flex justify-center'>
                                <button  type="submit" className='bg-green-600 px-16 py-2 rounded-full hover:bg-white hover:text-green-600'>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Signup