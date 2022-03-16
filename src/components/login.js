import axios from 'axios';
import { Navigate, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const Login = () => {
    // const(formDetail, setFormDetail) = useState(
    //     {
    //         name : " ";
    //         password : " ";
    //     }
    // )

    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setFormDetail(...FormDetail, [name]: value )
    // }
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //this is to sent to backend
        axios.post("http://localhost:5000/login", {
            username: data.get("username"),
            password: data.get("password")
        }).then((res) => {
            console.log(res)
            swal({
                title: "Status",
                text: "Logged In",
                icon: "success",
                timer: 2000
            });
            localStorage.setItem("accessToken",res.data.accessToken);
            navigate("/mainpage")
            // toast.error(err.response?.data?.message || err.message)
        }).catch((err) => {
            toast.error(err.response?.data?.message || err.message)
            console.log(err.response)
        })
        // console.log(data.get("username"));
        // console.log(data.get("password"));
    }


    return (
        <div className='h-screen bg-gray-100 pt-24'>
            <div className=' h-96 bg-gray-200 w-1/3 mx-auto border-2 rounded-md items-center box-shadow'>
            <div><h1 className='text-center text-3xl text-gray-500 my-10'>Login Panel</h1></div><hr />
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col  items-center h-96'>
                        <div>
                            <label className="text-xl text-gray-600 ml-2 mb-1">Username</label>
                            <br />
                            <input autoComplete="off" type="text" name="username" placeholder='Enter Username'/*value ={formDetail.name} onChange={handleChange}*/ required className="  border-gray-300 focus:shadow-lg  text-md p-2 border-2 focus:outline-none mb-4 h-9 w-56 focus:border-blue-400 rounded-md text-gray-500 " />
                        </div>
                        <div>
                            <label className="text-xl text-gray-600 ml-2 mb-1">Password</label>
                            <br />
                            <input type="password" placeholder='********' name="password" /*value ={formDetail.name} onChange={handleChange}*/ required className="  border-gray-300 focus:shadow-md  text-sm p-2 border-2 focus:outline-none mb-4 focus:border-blue-400 rounded-md text-gray-500 w-56 h-9" />
                        </div>
                    <div>
                        <button type="submit" className='bg-blue-500 px-4 w-56 py-2  text-md rounded-md text-white hover:bg-blue-600'><i className = ' fa fa-sign-in mr-1'></i>Login</button>
                    </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Login;
