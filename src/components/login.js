import {Link} from 'react-router-dom';

const Login = () => {
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
                        <form >
                            <div>
                                <label>Username
                                    <br/>
                                    <input type = "text" className='rounded-lg bg-zinc-500 focus:outline-none focus:ring-4'/>
                                </label>
                                <br /><br/>
                                <label>Password
                                    <br/>
                                    <input type="password" className='rounded-lg bg-zinc-500 focus:outline-none focus:ring-4'/>
                                </label>
                            </div>
                            <br/><br/>
                            <div className='flex justify-center'>
                                <Link to = "/mainpage">
                                    <button className='bg-green-600 px-16 py-2 rounded-full hover:bg-white hover:text-green-600'>Login</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Login;