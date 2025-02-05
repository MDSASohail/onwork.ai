import { Password, Person, Delete } from '@mui/icons-material';
import { useState } from 'react'
import UserIMG from '../Images/User Image.png'
import { Visibility, VisibilityOff, ToggleOff, ToggleOn } from '@mui/icons-material';
function ManagePassword() {

    const [showPassword, setPassowrd] = useState(false)
    return (
        <>

            <div className=" bg-white rounded-2xl py-9 xl:pb-20 pl-8  pr-8 xl:pr-20 xl:flex gap-2  xl:max-w-[90%]   ">
                <div className='flex justify-center   xl:mr-8  '>
                    <img src={UserIMG} alt='' className='w-36 h-36   rounded-full  ' />

                </div>
                <div className='flex-grow mt-10 '>
                    <h1 className=' z-10 border-2 text-center rounded-xl w-36 mx-auto xl:mx-0  border-borderColor py-2 px-6 text-borderColor'>Demo Name</h1>

                    {/* <div className='text-[#9F9F9F] my-5 '> */}


                    <div className=' my-4 p-2 w-full xl:w-[49%] hover:border-borderColor border-2 border-[#eaf0ff] hover:text-black transition-colors rounded-lg flex items-center bg-[#eaf0ff] text-[#737373]'>


                        <div className='flex flex-grow justify-between flex-col'>
                            <p>Current password</p>
                            <input className=' bg-transparent  w-full outline-none' type={showPassword ? 'text' : "password"} placeholder='Enter current password' />

                        </div>
                        <div className='cursor-pointer mr-2' onClick={() => setPassowrd((preValue) => !preValue)}>{showPassword ? <Visibility /> : <VisibilityOff />}</div>
                    </div>


                    {/* </div> */}
                    <div className='text-[#9F9F9F] my-5 xl:flex justify-between  gap-4'>

                    <div className=' my-4 p-2  flex-grow hover:border-borderColor hover:text-black transition-colors border-2 border-[#eaf0ff]  rounded-lg  bg-[#eaf0ff] text-[#737373]'>
                           <p>New password</p>

                            <div className='flex flex-grow justify-between items-center '>
                                
                                <input className=' bg-transparent  w-full outline-none' type={showPassword ? 'text' : "password"} placeholder='Enter new password' />
                                <div className='cursor-pointer mr-2' onClick={() => setPassowrd((preValue) => !preValue)}>{showPassword ? <Visibility /> : <VisibilityOff />}</div>

                            </div>
                           
                        </div>

                        <div className=' my-4 p-2  flex-grow hover:border-borderColor hover:text-black transition-colors border-2 border-[#eaf0ff]  rounded-lg  bg-[#eaf0ff] text-[#737373]'>
                           <p>Confirm new password</p>

                            <div className='flex flex-grow justify-between items-center '>
                                
                                <input className=' bg-transparent  w-full outline-none' type={showPassword ? 'text' : "password"} placeholder='Confirm new password' />
                                <div className='cursor-pointer mr-2' onClick={() => setPassowrd((preValue) => !preValue)}>{showPassword ? <Visibility /> : <VisibilityOff />}</div>

                            </div>
                           
                        </div>


                    </div>


                    <div className=' justify-center gap-6   flex items-center mt-5 xl:gap-4 xl:justify-between xl:w-[370px]'>
                        <button className='cursor-pointer bg-[#CAC7C7] text-[#585858] z-10 border-2 border-[#CAC7C7]  rounded-xl hover:bg-borderColor hover:text-white transition-colors  hover:border-borderColor py-2 px-6 '>Update Password</button>
                        <button className='cursor-pointer bg-[#CAC7C7] text-[#585858] z-10 border-2 border-[#CAC7C7]  rounded-xl hover:bg-borderColor hover:text-white transition-colors  hover:border-borderColor py-2 px-6 '>Discard Changes</button>
                    </div>


                </div>


            </div>
        </>
    )
}


export default ManagePassword