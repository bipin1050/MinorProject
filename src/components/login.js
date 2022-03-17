import axios from 'axios';
import { useNavigate, useLocation, Navigate } from 'react-router';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import { useAuth } from '../Authentication/auth';

const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.path || "/mainpage"
    console.log(redirectPath)

    if(auth.loggedIn){
        return <Navigate to = {redirectPath} />
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //this is to sent to backend
        axios.post("http://localhost:5000/login", {
            username: data.get("username"),
            password: data.get("password")
        }).then((res) => {
            // console.log(res)
            swal({
                title: "Status",
                text: "Logged In",
                icon: "success",
                timer: 2000
            });
            auth.login(res.data.accessToken);
            navigate(redirectPath)
        }).catch((err) => {
            toast.error(err.response?.data?.message || err.message)
            console.log(err.response)
        })
    }


    return (
        <div>
            <div className='h-screen bg-gray-100'>
                <div className='absolute bg-blend-darken w-full bg-black'>

                    <img src={require('../images/ims.jpg')} alt="Error" className='w-full h-screen opacity-30' />
                </div>
                <div className=' opacity-100 border-1 absolute top-32 left-96 h-80 bg-gray width40  mx-auto rounded-lg items-center login-shadow'>
                    <div><h1 className='text-center text-3xl text-white my-5'>Inventory Login</h1></div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col  items-center h-96'>
                            <div>
                                <label className="text18 text-white ml-2 mb-1">Username</label>
                                <br />
                                <input autoComplete="off" type="text" name="username" placeholder='Enter Username' required className="  border-gray-300 focus:shadow-lg  text-md p-2 border-2 focus:outline-none mb-4 h-9 w-64 focus:border-blue-400 rounded-md text-gray-500 " />
                            </div>
                            <div>
                                <label className="text18 text-white ml-2 mb-1">Password</label>
                                <br />
                                <input type="password" placeholder='********' name="password" required className="  border-gray-300 focus:shadow-md  text-sm p-2 border-2 focus:outline-none mb-4 focus:border-blue-400 rounded-md text-gray-500 w-64 h-9" />
                            </div>
                            <div className='mb-10'>
                                <button type="submit" className='bg-blue-500 px-4 w-64 py-2  text-md rounded-md text-white hover:bg-blue-600 active:bg-blue-500'><i className=' fa fa-sign-in mr-1'></i>Login</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    );
}

export default Login;