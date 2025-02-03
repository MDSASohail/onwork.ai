import LoginMobile from '../Images/Login Mobile.png';
import GoogleImg from '../Images/Google.png'
import Microsoft from '../Images/Microsoft.png'
import SocialMedia from '../Images/Social Media.png'
import UserIcon from '../Images/UserEmail Icon.png'
import PasswordIcon from '../Images/Password Icon.png'
import LinkedIn from '../Images/LinkedIn.png'
import Facebook from '../Images/Facebook.png'
import Instagram from '../Images/Instagram.png'
import Logo from '../Images/Logo2.png'
import FullLogo from '../Images/FullLogo_white_tagline (1).png'
import User from '../Images/user.png'
import { Visibility, VisibilityOff, ToggleOff, ToggleOn } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import StarComponent from './Stars';
function Login() {
    const [showPassword, setPassowrd] = useState(false)

    const [stars, setStars] = useState([]);

    // It generate and array of objects which contain there coordinate size and opacity
    useEffect(() => {

        const numStars = 150;
        const newStars = Array.from({ length: numStars }).map(() => ({
            x: Math.floor(Math.random() * window.innerWidth - 5),
            y: Math.floor(Math.random() * window.innerHeight - 5),
            size: Math.random() * 4 + 2,
            opacity: Math.random() * 0.8 + 0.2,
        }));
        setStars(newStars);
    }, []);


    return (
        <>

            <div className='fixed hidden w-full md:flex justify-center  md:top-3 lg:top-8  z-10'>
                <img className='w-56 border-   ' src={Logo} />

            </div>
            <div className="w-full  relative overflow-hidden max-h-screen h-screen bg-[#1c2b48]  flex justify-center items-center ">
              
                 <div className="absolute -top-16 right-0 w-[10px] h-[50px] rotate-45 rounded-b-3xl from-white via-30% z-10   bg-gradient-to-t  animate-comet"></div>

                <div className='absolute w-full h-full top-0 left-0 bg-primaryBgColor '>{
                    stars.map((star, index) => (<StarComponent key={index} {...star} />))
                }</div>
                <div className="max-w-[1000px]  relative border- p-6  w-full glass-panel  justify-center flex flex-col items-center text-white mx-3  gap-4  rounded-2xl   ">



                    <div className='w-full flex items-center justify-center gap-4 relative z-20 '>
                        <div className="  flex-grow  hidden md:block  ">
                            <div >
                                <span className='pl-10 border- text-2xl'>JOIN FOR FREE</span>

                                <p className='w-96 mt-3 pl-10 leading-10 font-bold text-2xl bg-gradient-to-r from-[#9C6FE4]  to-60%'>
                                    Drive efficiency with user behavior insights and reduce operational costs by <span className="text-borderColor text-3xl">30%.</span>
                                </p>

                            </div>
                            <div className='mt-16 border- flex justify-start ml-10 z-10'>
                                <div className=''>
                                    <p>GETS STARTED & FOLLOW TO KNOW MORE:</p>

                                    <div className='flex mt-2 justify-center gap-4 '>
                                        <div className='cursor-pointer'>

                                            <a href='#'> <img src={Instagram} /></a>
                                        </div>
                                        <div className='cursor-pointer'>

                                            <a href='#'><img src={LinkedIn} /></a>
                                        </div>
                                        <div className='cursor-pointer'>

                                            <a href='#'><img src={Facebook} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className=' max-w-[400px]  w-full  z-10'>
                            <strong className='text-2xl font-bold'>
                                <span className='text-borderColor '>SIGN IN </span> For a <br /> full-featured trail
                            </strong>
                            <form className='my-3'>
                                <div className=' my-4 p-2 rounded-lg  bg-[#353e4d] text-[#737373]'>
                                    <p>Email</p>

                                    <div className='flex justify-between'>
                                        <input className=' bg-transparent text-white w-full outline-none ' type='text' placeholder='Enter email' />
                                        <img src={User} alt='' className='mr-2 w-4 h-6' />
                                    </div>
                                </div>
                                <div className=' my-4 p-2 rounded-lg flex items-center bg-[#353e4d] text-[#737373]'>


                                    <div className='flex flex-grow justify-between flex-col'>
                                        <p>Password</p>
                                        <input className=' bg-transparent  w-full outline-none' type={showPassword ? 'text' : "password"} placeholder='Enter password' />

                                    </div>
                                    <div className='cursor-pointer mr-2' onClick={() => setPassowrd((preValue) => !preValue)}>{showPassword ? <Visibility className='text-white' /> : <VisibilityOff className='text-white' />}</div>
                                </div>

                                <div className=' mt-8 mb-2 text-[#737373]'>{showPassword ? <ToggleOn style={{ fontSize: "40px", }} /> : <ToggleOff style={{ fontSize: "40px", color: "white" }} />}Remember me</div>
                                <div className=' text-center bg-[#9C6FE4] rounded-md  text-white font-bold'>
                                    <button className='w-full py-2 '>SIGN IN</button>
                                </div>
                                <div className='flex justify-between  my-3 flex-col md:flex-row '>
                                    <div>
                                        <span>Not a Member?</span>
                                        <a href='#'><span className='text-borderColor underline font-semibold'> SIGN UP</span></a>
                                    </div>
                                    <a href='#'> <span className=' underline'> sign In via OTP</span></a>
                                </div>
                                <div className=' my-2 flex items-center'>
                                    <div className='border-b-2 border-[#666669] h-0 flex-grow'></div>
                                    <span className='mx-2'>or Sign Up with</span>
                                    <div className='border-b-2 border-[#666669] h-0 flex-grow'></div>
                                </div>
                                <div className='flex justify-center gap-4 cursor-pointer'>
                                    <div className=' rounded-lg py-2 flex-grow bg-[#686e7a]'>
                                        <div className='flex items-center justify-center'>
                                            <a href='#' className=''> <img className='mx-2 w-6 lg:w-10 md:w-8' src={GoogleImg} /></a>
                                            <span className='font-bold  text-sm md:text-lg lg:text-xl'>Google</span>
                                        </div>


                                    </div>
                                    <div className='cursor-pointer rounded-lg py-2  flex-grow bg-[#686e7a]'>
                                        <div className='flex items-center justify-center'>
                                            <a href='#' className=''> <img className='mx-2 w-6 lg:w-10 md:w-8 ' src={Microsoft} /></a>
                                            <span className='font-bold  text-sm md:text-lg lg:text-xl'>Microsoft</span>
                                        </div>
                                       



                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>




                </div>


            </div>

            {/* <div className='z-50 fixed text-lg md:text-xl lg:text-2xl font- bottom-8 text-white w-full  md:flex justify-center md:bottom-3 lg:bottom-8 hidden'>
                <div className='font-medium max-w-[1100px] w-full flex justify-evenly '>
                    <div className='text-center'>
                        <h1>ANALYZE</h1>
                        <h1 className='text-xl'> USER</h1>
                    </div>
                    
                    <div className='text-center'>
                        <h1>OPTIMISE</h1>
                        <h1 className='text-xl'>GROWTH</h1>
                    </div>

                    <div className='text-center'>
                        <h1>MAXIMIZE</h1>
                        <h1 className='text-xl'>SUCCESS</h1>
                    </div>

                </div>

            </div> */}
        </>
    )
}


export default Login;


