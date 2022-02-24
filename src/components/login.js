import axios from 'axios';
import {useForm} from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

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
        axios.post("http://localhost:5000/login",{
            username: data.get("username"),
            password: data.get("password")
        }).then((res)=>{
            navigate("mainpage")
        }).catch((err)=>{
            toast.error(err.response.data.message)
            console.log(err.response)
        })
        console.log(data.get("username"));
        console.log(data.get("password"));
    }
    // var body = {
    //     userName: 'Fred',
    //     password: 'Flintstone@gmail.com'
    // }
    // axios({
    //     method: 'post',
    //     url: '/addUser',
    //     data: body
    // })
    // .then(function (response) {
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });

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
                    <div className='flex justify-center font-bold text-2xl'>Login to IMS</div>
                </div>
                <div className='flex justify-center text-2xl'>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Username</label>
                                <br/>
                                <input type = "text" name ="username" /*value ={formDetail.name} onChange={handleChange}*/ required className='rounded-lg bg-zinc-500 focus:outline-none focus:ring-4'/>
                                <br /><br/>
                                <label>Password</label>
                                <br/>
                                <input type="password" name="password" /*value ={formDetail.name} onChange={handleChange}*/ required className='rounded-lg bg-zinc-500 focus:outline-none focus:ring-4'/>
                            </div>
                            <br/><br/>
                            <div className='flex justify-center'>
                                <button  type="submit" className='bg-green-600 px-16 py-2 rounded-full hover:bg-white hover:text-green-600'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Login;
