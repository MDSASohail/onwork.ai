import { Password, Person, Delete } from '@mui/icons-material';
import { useState } from 'react'
import UserIMG from '../Images/User Image.png'
import { Visibility, VisibilityOff, ToggleOff, ToggleOn } from '@mui/icons-material';
function ManagePassword() {

    const [showPassword, setPassowrd] = useState(false)
    return (
        <>

            <div className=" bg-white rounded-2xl py-5 px-8 flex gap-5  w-[90%]">
                <div className=' w-40'>
                    <img src={UserIMG} alt='' className='w-32 rounded-full h-32' />

                </div>
                <div className='w-full mt-10 '>
                    <button className='cursor-pointer z-10 border-2  rounded-xl hover:bg-borderColor hover:text-white transition-colors   border-borderColor py-2 px-6 text-borderColor'>Demo Name</button>

                    {/* <div className='text-[#9F9F9F] my-5 '> */}


                    <div className=' my-4 p-2  w-[49%] hover:border-borderColor border-2 border-[#eaf0ff] hover:text-black transition-colors rounded-lg flex items-center bg-[#eaf0ff] text-[#737373]'>


                        <div className='flex flex-grow justify-between flex-col'>
                            <p>Current password</p>
                            <input className=' bg-transparent  w-full outline-none' type={showPassword ? 'text' : "password"} placeholder='Enter current password' />

                        </div>
                        <div className='cursor-pointer mr-2' onClick={() => setPassowrd((preValue) => !preValue)}>{showPassword ? <Visibility  /> : <VisibilityOff  />}</div>
                    </div>


                    {/* </div> */}
                    <div className='text-[#9F9F9F] my-5 flex w-full  gap-4'>

                        <div className=' my-4 p-2  w-[49%] hover:border-borderColor hover:text-black border-2 border-[#eaf0ff] transition-colors  rounded-lg flex items-center bg-[#eaf0ff] text-[#737373]'>


                            <div className='flex flex-grow justify-between flex-col'>
                                <p>New password</p>
                                <input className=' bg-transparent  w-full outline-none' type={showPassword ? 'text' : "password"} placeholder='Enter new password' />

                            </div>
                            <div className='cursor-pointer mr-2' onClick={() => setPassowrd((preValue) => !preValue)}>{showPassword ? <Visibility /> : <VisibilityOff  />}</div>
                        </div>
                        <div className=' my-4 p-2  w-[49%] hover:border-borderColor hover:text-black transition-colors border-2 border-[#eaf0ff]  rounded-lg flex items-center bg-[#eaf0ff] text-[#737373]'>


                            <div className='flex flex-grow justify-between flex-col'>
                                <p>Confirm new password</p>
                                <input className=' bg-transparent  w-full outline-none' type={showPassword ? 'text' : "password"} placeholder='Confirm new password' />

                            </div>
                            <div className='cursor-pointer mr-2' onClick={() => setPassowrd((preValue) => !preValue)}>{showPassword ? <Visibility /> : <VisibilityOff  />}</div>
                        </div>


                    </div>


                    <div className=' justify-between flex items-center my-10 w-[380px]'>
                        <button className='cursor-pointer z-10 border-2  rounded-xl hover:bg-borderColor hover:text-white transition-colors  border-borderColor py-2 px-6 text-borderColor'>Update Password</button>
                        <button className='cursor-pointer  z-10 border-2  rounded-xl hover:bg-borderColor hover:text-white transition-colors  border-borderColor py-2 px-6 text-borderColor'>Discard Changes</button>
                    </div>


                </div>


            </div>
        </>
    )
}


export default ManagePassword