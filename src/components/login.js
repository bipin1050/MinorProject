import {Link} from 'react-router-dom';

const Login = () => {
    return ( 
        <div className='left-0 top-0'>
            <div className='w-2/3 left-0 right-0 top-0 float-left'>
                <img src={require('../images/ims.jpg')} className ='h-screen w-full' alt="LOGO" ></img>
            </div>
            <div className='w-1/3 h-screen left-0 right-0 float-left bg-zinc-800 text-white'>
                <div className='pt-52'>
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
                                    <input type = "text" className='rounded-lg bg-zinc-500 focus:outline-none focus:shadow-2xl'/>
                                </label>
                                <br /><br/>
                                <label>Password
                                    <br/>
                                    <input type="password" className='rounded-lg bg-zinc-500 focus:outline-none'/>
                                </label>
                            </div>
                            <br/><br/>
                            <div className='flex justify-center'>
                                <Link to = "/mainpage">
                                    <input type = "button" value="Login" className='bg-green-600 px-16 py-3 rounded-full hover:bg-white hover:text-green-600'/>
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