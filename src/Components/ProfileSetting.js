import UserIMG from '../Images/Dummy Place holder.png'
import {useState} from 'react'
function ProfileSetting() {

    const [previewImage, setPreviewImage] = useState(UserIMG);

    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewImage(e.target.result); // Set preview image URL
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <>

            <div className=" bg-white rounded-2xl py-5 px-8 lg:flex gap-2  ">
                <div className='text-center w-32 h-32 overflow-hidden '>
                    <img src={previewImage} alt='' className='w-32  rounded-full h-32 ' />

                </div>
                <div className=' mt-10'>
                    <div className=' justify-between flex items-center lg:w-80'>
                        <div className='relative'>
                            <label htmlFor='uploadNew' className='cursor-pointer rounded-xl z-10 border-2 hover:bg-borderColor hover:text-white transition-colors  border-borderColor  py-2 px-6 text-borderColor'>Upload New</label>
                            <input type='file' accept='image/*' onChange={handleImageChange} id='uploadNew' className='absolute -z-10 top-0 left-0 opacity-0 cursor-pointer' />
                        </div>
                        <button className='cursor-pointer z-10 border-2  rounded-xl hover:bg-borderColor hover:text-white transition-colors   border-borderColor py-2 px-6 text-borderColor'>Delete Image</button>
                    </div>

                    <div className='text-[#9F9F9F] my-5 lg:flex w-full  gap-4'>
                        <div className='bg-[#eaf0ff]  flex-grow rounded-xl p-1 pl-4 transition-colors hover:border-borderColor border-2 border-[#eaf0ff] hover:text-black'>
                            <p className=''>First name</p>
                            <input type='text ' className='bg-transparent w-full text-xl p-1  pl-0 outline-none' placeholder='First name' />
                        </div>

                        <div className='bg-[#eaf0ff]  flex-grow  rounded-xl p-1 pl-4  my-3 transition-colors hover:border-borderColor border-2 border-[#eaf0ff] hover:text-black'>
                            <p className=''>Last name</p>
                            <input type='text ' className='bg-transparent text-xl p-1  w-full pl-0 outline-none' placeholder='Last name' />
                        </div>
                    </div>
                    <div className='text-[#9F9F9F] my-5 lg:flex w-full  gap-4'>
                        <div className='bg-[#eaf0ff]  flex-grow rounded-xl p-1 pl-4 my-3 transition-colors hover:border-borderColor border-2 border-[#eaf0ff] hover:text-black'>
                            <p className=''>Email</p>
                            <input type='email ' className='bg-transparent text-xl p-1 w-full pl-0 outline-none' placeholder='Email' />
                        </div>

                        <div className='bg-[#eaf0ff] flex-grow  rounded-xl p-1 pl-4 transition-colors hover:border-borderColor border-2 border-[#eaf0ff] hover:text-black'>
                            <p className=''>Mobile No</p>
                            <input type='number' className='bg-transparent text-xl p-1 w-full  pl-0 outline-none' placeholder='Mobile number' />
                        </div>
                    </div>
                    <div className='text-[#9F9F9F]  lg:flex w-full my-5  gap-4'>
                        <div className='bg-[#eaf0ff] flex-1   flex-grow rounded-xl p-1 pl-4 transition-colors hover:border-borderColor border-2 border-[#eaf0ff] hover:text-black'>
                            <p >Role</p>
                            <select className='bg-transparent text-xl p-1 w-full  pl-0 outline-none'>
                                <option value={"Senior manager"}>Senior Manager</option>
                                <option value={"Manager"}>Manager</option>
                                <option value={"Senior manager"}>Senior Manager</option>
                                <option value={"Senior manager"}>Senior Manager</option>
                                <option value={"Senior manager"}>Senior Manager</option>
                            </select>
                        </div>
                        
                        <div className='bg-[#eaf0ff] flex-grow flex-1  rounded-xl p-1 pl-4 transition-colors my-3 hover:border-borderColor border-2 border-[#eaf0ff] hover:text-black'>
                            <p className=''>Unique Id</p>
                            <input type='text' value={"M0123"} disabled className='bg-transparent text-xl p-1 w-full  pl-0 outline-none' placeholder='unique Id' />
                        </div>
                    </div>

                    <div className=' justify-between flex items-center my-5 lg:w-[350px]'>
                        <button className='cursor-pointer z-10 border-2  rounded-xl hover:bg-borderColor hover:text-white transition-colors  border-borderColor py-2 px-6 text-borderColor'>Save Changes</button>
                        <button className='cursor-pointer z-10 border-2  rounded-xl hover:bg-borderColor hover:text-white transition-colors  border-borderColor py-2 px-6 text-borderColor'>Discard Changes</button>
                    </div>


                </div>


            </div>
        </>
    )
}


export default ProfileSetting