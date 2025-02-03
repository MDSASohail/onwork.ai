import ProfileIMG from '../Images/Profile.png';
import {Man} from '@mui/icons-material'

function ProfileDetail()
{
    return(
        <div className="border-2 border-[#8766FF] p-3 bg-white  rounded-3xl w-72">
            <div className='flex items-start'>
                <img src={ProfileIMG} className='w-8 h-8 rounded-full mt-2'/>
                <div className='flex-1 ml-2 '>
                    <strong>Demo User Name</strong>
                    <h2 className='text-[#9F9F9F]'>demo23@gmail.com</h2>
                    <h4 className='text-[#8766FF]'>Manager</h4>
                </div>
            </div>
            <div>
                <div className='border-b-2 border-[#CAC7C7] text-[#808080] hover:text-black flex justify-start px-1 py-3'>
                    <Man/>
                    <h2 className='ml-2'>Manage Profile</h2>
                </div>
                <div className='border-b-2 border-[#CAC7C7] text-[#808080] hover:text-black flex justify-start px-1 py-3'>
                    <Man/>
                    <h2 className='ml-2'>Change Password</h2>
                </div>
                <div className='border-b-2 border-[#CAC7C7] text-[#808080] hover:text-black flex justify-start px-1 py-3'>
                    <Man/>
                    <h2 className='ml-2'>Manage Billing</h2>
                </div>
                <div className='border-b-2 border-[#CAC7C7] text-[#808080] hover:text-black flex justify-start px-1 py-3'>
                    <Man/>
                    <h2 className='ml-2'>Invite Members</h2>
                </div>
                <div className='border-b-2 border-[#CAC7C7] text-[#808080] hover:text-black flex justify-start px-1 py-3'>
                    <Man/>
                    <h2 className='ml-2'>Refer and Earn</h2>
                </div>
                <div className='border-b-2 border-[#CAC7C7] text-[#808080] hover:text-black flex justify-start px-1 py-3'>
                    <Man/>
                    <h2 className='ml-2'>My Plan</h2>
                    <span className='text-[#8766FF] ml-8'>Free</span>
                </div>
                <div className='border-b-2 border-[#CAC7C7] text-[#808080] hover:text-black flex justify-start px-1 py-3'>
                    <Man/>
                    <h2 className='ml-2'>Credit</h2>
                    <span className='text-[#8766FF] ml-8'>126 left</span>
                </div>
                <div className='border-b-2 border-[#CAC7C7] text-[#808080] hover:text-black flex justify-start px-1 py-3'>
                    <Man/>
                    <h2 className='ml-2'>Sing out</h2>
                </div>

            </div>

        </div>
    )
}

export default ProfileDetail;