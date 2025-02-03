import { Password, Person, Delete, ManageAccounts } from '@mui/icons-material';
import UserIMG from '../Images/User Image.png'
import ProfileSetting from './ProfileSetting';
import ManagePassword from './ManagePassword';
function ManageProfile() {
    return (
        <>
            <div className=" lg:py-20 lg:px-10 lg:flex  gap-7 rounded-2xl bg-[#eaf0ff] relative py-10 px-5 my-10">
                <div className='absolute -top-6 left-10 p-3 flex items-center text-xl border-2 border-borderColor font-bold rounded-xl bg-white'>
                    <div className='text-borderColor '><ManageAccounts style={{fontSize:"30px"}}/></div>
                    <h2 className='ml-3 '>Account Setting</h2>
                </div>

                <div className=" lg:w-[350px] w-full lg:block flex text-center lg:text-left text-[#9F9F9F] border-2  bg-white border-borderColor p-2 rounded-2xl my-10">
                    <div className=' py-3 px-2 cursor-pointer border-b-2 mb-1 hover:text-black hover:bg-borderColor transition-colors'>
                        <Person />
                        <span className='ml-2'>Profile Setting</span>
                    </div>
                    <div className=' py-3 px-2 cursor-pointer border-b-2 mb-1 hover:text-black hover:bg-borderColor transition-colors'>
                        <Person />
                        <span className='ml-2'>Password</span>
                    </div>
                    <div className='py-3 px-2 cursor-pointer border-b-2 mb-1 hover:text-black hover:bg-borderColor transition-colors'>
                        <Person />
                        <span className='ml-2'>Manage Plans</span>
                    </div>
                    <div className=' py-3 px-2 cursor-pointer border-b-2 mb-1 hover:text-black hover:bg-borderColor transition-colors'>
                        <Person />
                        <span className='ml-2'>Payment Details</span>
                    </div>
                    <div className=' py-3 px-2 cursor-pointer border-b-2 mb-1 hover:text-black hover:bg-borderColor transition-colors'>
                        <Person />
                        <span className='ml-2'>Deactivate Account</span>
                    </div>
                    <div className=' py-3 px-2 cursor-pointer  mb-1'>
                        <Delete className='text-[#CF0D0D]'/>
                        <span className='ml-2 text-[#CF0D0D]'>Delete Account</span>
                        <p className='text-sm'>Once you delete your account, there is no going back. Please be certain.

                        </p>
                    </div>


                </div>
                <div className='w-full mt-10'>
                    <ProfileSetting/>
                    {/* <ManagePassword/> */}
                </div>

            </div>
        </>
    )
}

export default ManageProfile