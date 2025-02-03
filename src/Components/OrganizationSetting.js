import { Password, Person, Delete, ManageAccounts, Info, Cancel, Close } from '@mui/icons-material';
import UserIMG from '../Images/User Image.png'
import ProfileSetting from './ProfileSetting';
import ManagePassword from './ManagePassword';
import { useState } from 'react';
import NewOrganization from './NewOrganization';
import NewSite from './NewSite';
function OrganizationSetting() {

    const [help, setHelp] = useState(null) // DR = Data retention hepl msg, ORSLR = Organization sesssion limit reset
    const [OrgOrSite, setOrgOrSite] = useState(null) // site = display new site Componenet, org = display org Componenet , null = hide both
    return (
        <>
            <div className=" lg:py-14 lg:px-6 lg:flex justify-between rounded-2xl bg-[#eaf0ff] relative  my-10 ">
                <div className='absolute -top-6 left-10 p-3 flex items-center text-xl border-2 border-borderColor font-bold rounded-xl bg-white'>
                    <div className='text-borderColor '><ManageAccounts style={{ fontSize: "30px" }} /></div>
                    <h2 className='ml-3 '>Organization Setting</h2>
                </div>

                <div className=" min-w-60 max-w-96  lg:mr-6 lg:block flex text-center lg:text-left text-[#9F9F9F] border-2 max-h-[400px]  bg-white border-borderColor p-2 rounded-2xl ">
                    <div className=' py-3 px-2 cursor-pointer border-b-2 mb-1 hover:text-black hover:bg-borderColor transition-colors'>
                        <Person />
                        <span className='ml-2'>Team</span>
                    </div>
                    <div className=' py-3 px-2 cursor-pointer border-b-2 mb-1 hover:text-black hover:bg-borderColor transition-colors'>
                        <Person />
                        <span className='ml-2'>Organization & Sites</span>
                    </div>
                    <div className='py-3 px-2 cursor-pointer border-b-2 mb-1 hover:text-black hover:bg-borderColor transition-colors'>
                        <Person />
                        <span className='ml-2'>User Attributes</span>
                    </div>
                    <div className=' py-3 px-2 cursor-pointer border-b-2 mb-1 hover:text-black hover:bg-borderColor transition-colors'>
                        <Person />
                        <span className='ml-2'>Intergration</span>
                    </div>
                    <div className=' py-3 px-2 cursor-pointer border-b-2 mb-1 hover:text-black hover:bg-borderColor transition-colors'>
                        <Person />
                        <span className='ml-2'>user lookup</span>
                    </div>
                    <div className=' py-3 px-2 cursor-pointer border-b-2 mb-1 hover:text-black hover:bg-borderColor transition-colors'>
                        <Person />
                        <span className='ml-2'>Preferences</span>
                    </div>
                    <div className=' py-3 px-2 cursor-pointer  mb-1 hover:text-black hover:bg-borderColor transition-colors'>
                        <Person />
                        <span className='ml-2'>Single sign-on</span>
                    </div>



                </div>
                <div className='flex-grow  bg-white rounded-2xl p-6  pb-32'>
                    <div className='flex justify-between items-center'>
                        <a className='text-borderColor border-borderColor   underline text-sm'>Accound owner</a>
                        <div>
                            <button onClick={()=>setOrgOrSite("site")} className='bg-textLightColor px-3 py-1 rounded-lg text-white mx-4 hover:bg-borderColor transition-colors'>New Site</button>
                            <button onClick={()=>setOrgOrSite("org")} className='bg-textLightColor px-3 py-1 rounded-lg text-white hover:bg-borderColor transition-colors'> New Organization</button>
                        </div>
                    </div>
                    <h1><span className='text-lg font-medium'>onWork.ai</span> <span>(ID:3746839)</span></h1>

                    <div className='flex justify-between    '>


                        <div className='flex-grow mr-6'>
                            <div className='flex   gap-2 justify-between relative border-2 border-borderColor rounded-xl p-4 mt-8'>

                                <div className='absolute -top-6 left-8 p-3 flex items-center     rounded-xl bg-white'>

                                    <h2 className=' '>Overview</h2>
                                </div>

                                <div className='text-center'>
                                    <h1 className='font-[600] text-lg '>08/1200</h1>
                                    <span className='text-nowrap text-textLightColor'>Monthly Sessiion</span>
                                </div>

                                <div className='text-center'>

                                    <h1 className='font-[600] text-lg text-center'>08/Unlimited</h1>
                                    <span className='text-nowrap text-textLightColor'>Heatmap</span>
                                </div>

                                <div className='text-center'>

                                    <h1 className='font-[600] text-lg text-center'>08/Unlimited</h1>
                                    <span className='text-nowrap text-textLightColor'>Events</span>
                                </div>

                                <div className='text-center'>


                                    <h1 className='font-[600] text-lg text-center'>08/unlimited</h1>
                                    <span className='text-nowrap text-textLightColor'>Funnel</span>
                                </div>
                            </div>

                            <div className='py-2 px-3  border-2 border-borderColor rounded-xl my-6'>
                                <div className='flex justify-between my-6'>
                                    <span className='text-textLightColor underline'>Organization Name</span>
                                    <span className='font-medium'>Camrony</span>
                                </div>

                                <div className='flex justify-between my-6 relative'>
                                    <div className={`absolute transition-opacity ${help === "OSLR" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>

                                        <HelpMessage heading={"Data Retention"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr."} />

                                    </div>

                                    <h1 className='text-textLightColor underline'>Organization session limit reset<span onMouseEnter={() => { setHelp("OSLR") }} onMouseLeave={() => { setHelp(null) }}> <Info style={{ fontSize: 20 }} className='ml-2 cursor-pointer transition-colors hover:text-borderColor' /></span></h1>
                                    <span className='font-medium'>Merch 12, 2025</span>
                                </div>

                                <div className='flex justify-between my-6 relative '>

                                    <div className={`absolute transition-opacity ${help === "DR" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>

                                        <HelpMessage heading={"Data Retention"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr."} />

                                    </div>

                                    <span className='text-textLightColor underline'>Data Retention <span onMouseEnter={() => { setHelp("DR") }} onMouseLeave={() => { setHelp(null) }}> <Info style={{ fontSize: 20 }} className='ml-2 cursor-pointer transition-colors hover:text-borderColor' /></span></span>
                                    <span className='font-medium'>1 Month</span>
                                </div>
                            </div>
                        </div>

                        <div className='relative -top-4  '>
                            <div className={`transition-opacity  ${OrgOrSite === "org"? "opacity-100 z-50" :"opacity-0 z-10 pointer-events-none"}`}><NewOrganization/></div>
                            <div className={`transition-opacity  ${OrgOrSite === 'site' ? "opacity-100 z-50" :"opacity-0 z-10 pointer-events-none"}`}><NewSite/></div>
                            
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default OrganizationSetting


function HelpMessage({ heading, paragraph }) {
    return (
        <>

            <div className='p-4 absolute w-80 top-6 shadow-lg rounded-xl bg-white z-50'>
                <div className='flex justify-between'>
                    <span className='font-[600]'>{heading}</span>
                    <Close className='text-textLightColor' />
                </div>

                <p className='text-justify mt-2 text-textLightColor text-sm'>{paragraph}</p>
            </div>
        </>
    )
}