import { Settings, Map, GroupAdd, NotificationAdd, Password, Domain, Man2, Update, ArrowRight } from '@mui/icons-material';
import HeatMap from '../Images/HeatMap.png';
import Logo from '../Images/Onwork Logo.png';
import SessionRecording from '../Images/SessionRecording.png';
import Billing from '../Images/Billings.png'
import ProfileIMG from '../Images/Profile.png'
import EachNotification from './EachNotification';
import { useState } from 'react';
import ProfileDetail from './ProfileDetail';
import CompanyLogo from './CompanyLogo';
function TopMiddle()
{

    const [showHideOptions, setShowHideOptions] = useState("");
    const [showHideInnerOptions, setShowHideInnerOptions] = useState("");


    const toggleshowHideOptions = (whichOne) => {  //It is use to show and hide the inner divs. It is holding the name which one to show.
        setShowHideOptions(whichOne);

        console.log("Run , which", whichOne,showHideOptions)
    }


    const toggleshowHideInnserOptions = (whichInnerOne) => {
        setShowHideInnerOptions(whichInnerOne);
    }
    return(
        <>
        <div className='flex  '>
                <div className='flex flex-col items-center mx-4 hover:text-white cursor-pointer'>
                    <Map className='text-gray-400' style={{width:"20px", height:"20px"}} />
                    <span className='text-[#9F9F9F] text-sm'>Map</span>
                </div>
                <div className='flex flex-col items-center mx-4 hover:text-white cursor-pointer'>
                    <img src={HeatMap} alt="HeatMap" className='w-5 h-5' />
                    <span className='text-[#9F9F9F] text-sm'>HeatMap</span>
                </div>
                <div className='flex flex-col items-center mx-4 hover:text-white cursor-pointer'>
                    <img src={SessionRecording} alt="Session Recording" className='w-5 h-5' />
                    <span className='text-[#9F9F9F] text-sm'>Session Recording</span>
                </div>
                <div className='flex flex-col items-center mx-4 relative cursor-pointer  ' onClick={() => { toggleshowHideOptions("Setting") }} onMouseLeave={() => { toggleshowHideOptions("") }}>
                    <Settings className='text-gray-400' style={{width:"20px", height:"20px"}} />
                    <span className='text-[#9F9F9F] text-sm'>Settings</span>
                    <div className={`absolute border-2 border-[#8766FF] bg-white w-60 -left-18 top-10 rounded-2xl transition-opacity duration-300  py-2 ${showHideOptions === "Setting" ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                        <ul>
                            <li className='px-2 py-3 border-b-2 mx-1 hover:bg-[#8766FF]'>
                                <Update />
                                <span className='ml-2'> Update User Profile</span>
                            </li>
                            <li className='px-2 py-3 border-b-2 mx-1 hover:bg-[#8766FF]'>
                                <Password />
                                <span className='ml-2'>Change password</span>
                            </li>
                            <li className='px-2 py-3 border-b-2 mx-1 hover:bg-[#8766FF]'>
                                <NotificationAdd />
                                <span className='ml-2'>Manage Notifications</span>
                            </li>

                            <li className='px-2 py-3 border-b-2 mx-1 hover:bg-[#8766FF]'>
                                <Man2 />
                                <span className='ml-2'>Restrict IP</span>
                            </li>

                            <li className='px-2 py-3 border-b-2 mx-1 relative hover:bg-[#8766FF]' onMouseEnter={() => { toggleshowHideInnserOptions("Organization") }} onMouseLeave={() => { toggleshowHideInnserOptions("") }}>
                                <Man2 />
                                <span className='ml-2'>Organization</span>
                                <ArrowRight sx={{ width: 30, height: 30 }} className='absolute right-0' />
                                <div className={`absolute border-2 border-[#8766FF] bg-white w-60 md:right-[232px] lg:-right-[250px] -top-4 rounded-2xl transition-opacity duration-300 py-2  ${showHideInnerOptions === "Organization" ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                                    <ul>
                                        <li className='px-2 py-3 border-b-2 mx-1 hover:bg-[#8766FF]'>
                                            <Man2 />
                                            <span className='ml-2'>Restrict IP</span>
                                        </li>
                                        <li className='px-2 py-3 border-b-2 mx-1 hover:bg-[#8766FF]'>
                                            <Man2 />
                                            <span className='ml-2'>Restrict IP</span>
                                        </li>
                                        <li className='px-2 py-3 border-b-2 mx-1 hover:bg-[#8766FF]'>
                                            <Man2 />
                                            <span className='ml-2'>Restrict IP</span>
                                        </li>
                                        <li className='px-2 py-3 border-b-2 mx-1 hover:bg-[#8766FF]'>
                                            <Man2 />
                                            <span className='ml-2'>Restrict IP</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className='px-2 py-3  mx-1 relative hover:bg-[#8766FF]' onMouseEnter={() => { toggleshowHideInnserOptions("Domain") }} onMouseLeave={() => { toggleshowHideInnserOptions("") }}>
                                <Domain />
                                <span className='ml-2'>Domain</span>
                                <ArrowRight sx={{ width: 30, height: 30 }} className='absolute right-0' />
                                <div className={`absolute border-2 border-[#8766FF] bg-white w-60 md:right-[232px] lg:-right-[250px] top-0 rounded-2xl transition-opacity duration-300 py-2  ${showHideInnerOptions === "Domain" ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                                    <ul>
                                        <li className='px-2 py-3 border-b-2 mx-1 hover:bg-[#8766FF]'>
                                            <Man2 />
                                            <span className='ml-2'>Manage #CurrentDomain</span>
                                        </li>
                                        <li className='px-2 py-3 border-b-2 mx-1 hover:bg-[#8766FF]'>
                                            <Man2 />
                                            <span className='ml-2'>Manage Domains</span>
                                        </li>
                                        <li className='px-2 py-3 border-b-2 mx-1 hover:bg-[#8766FF]'>
                                            <Man2 />
                                            <span className='ml-2'>Switch Domain</span>
                                        </li>
                                        <li className='px-2 py-3 border-b-2 mx-1 hover:bg-[#8766FF]'>
                                            <Man2 />
                                            <span className='ml-2'>Add New Domain</span>
                                        </li>
                                        <li className='px-2 py-3 border-b-2 mx-1 hover:bg-[#8766FF]'>
                                            <Man2 />
                                            <span className='ml-2'>Add Domain Logo**</span>
                                        </li>
                                        <li className='px-2 py-3 border-b-2 mx-1 hover:bg-[#8766FF]'>
                                            <Man2 />
                                            <span className='ml-2'>Manage Roles/Teams</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                        </ul>

                    </div>
                </div>
                <div className='flex flex-col items-center px-4 relative  cursor-pointer'  onClick={() => { toggleshowHideOptions("Billings") }} onMouseLeave={() => { toggleshowHideOptions("") }}>
                    <img src={Billing} alt="Billing" className='w-5 h-5' />
                    <span className='text-[#9F9F9F] text-sm'>Billing</span>
                    <div className={`absolute border-2 border-borderColor bg-white w-60  top-12 rounded-2xl transition-opacity duration-300  py-2 ${showHideOptions === "Billings" ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                        <ul>
                            <li className='px-2 py-3 border-b-2 mx-1 hover:bg-hoverBGColor'>
                                <Man2 />
                                <span className='ml-2'>Manage Current Plan</span>
                            </li>
                            <li className='px-2 py-3 border-b-2 mx-1 hover:bg-hoverBGColor'>
                                <Man2 />
                                <span className='ml-2'>Manage Addons</span>
                            </li>
                            <li className='px-2 py-3 border-b-2 mx-1 hover:bg-hoverBGColor'>
                                <Man2 />
                                <span className='ml-2'>Buy More AI Tokens</span>
                            </li>
                            <li className='px-2 py-3 border-b-2 mx-1 hover:bg-hoverBGColor'>
                                <Man2 />
                                <span className='ml-2'>Update Payment Methods</span>
                            </li>
                            <li className='px-2 py-3 border-b-2 mx-1 hover:bg-hoverBGColor'>
                                <Man2 />
                                <span className='ml-2'>Add New Members</span>
                            </li>
                            <li className='px-2 py-3 border-b-2 mx-1 hover:bg-hoverBGColor'>
                                <Man2 />
                                <span className='ml-2'>Change Plan**</span>
                            </li>
                            <li className='px-2 py-3 border-b-2 mx-1 hover:bg-hoverBGColor'>
                                <Man2 />
                                <span className='ml-2'>Cancel Billing**</span>
                            </li>

                            <li className='px-2 py-3 border-b-2 mx-1 hover:bg-hoverBGColor'>
                                <Man2 />
                                <span className='ml-2'>Refer and Earn</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
          
        </>
    )
}

export default TopMiddle