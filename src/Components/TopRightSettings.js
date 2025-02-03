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
import HeaderDetail from './TopMiddle';
const notifications = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. ", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. ", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. ", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. ", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. ", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. "]

function TopRightSettings() {
    const [showHideOptions, setShowHideOptions] = useState("");
    const [showHideInnerOptions, setShowHideInnerOptions] = useState("");


    const toggleshowHideOptions = (whichOne) => {  //It is use to show and hide the inner divs. It is holding the name which one to show.
        setShowHideOptions(whichOne);

        console.log("Run , which", whichOne, showHideOptions)
    }


    const toggleshowHideInnserOptions = (whichInnerOne) => {
        setShowHideInnerOptions(whichInnerOne);
    }
    return (
        <>
            <div className='flex items-center gap-4 z-[100]' >

                <div className='hover:bg-[#8766FF] rounded-full p-[6px] cursor-pointer'>
                    <GroupAdd className='  text-white' style={{ width: "30px", height: "30px" }} />
                </div>

                <div className="relative cursor-pointer   hover:bg-[#8766FF] rounded-full p-[6px]" onClick={() => toggleshowHideOptions("Notification")} onMouseLeave={() => toggleshowHideOptions("")}>


                    <NotificationAdd className=" text-white " style={{ width: "30px", height: "30px" }} />

                    <div className={`border-2 border-[#8766FF] absolute right-2 bg-white w-[500px] rounded-2xl overflow-hidden px-1 transition-opacity duration-300 ease-in-out ${showHideOptions === "Notification" ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                        <span className='font-medium border-b-2 border-[#8766FF] ml-2'>Notification</span>
                        <div className='mt-3'>

                            {notifications.map((singleNotification, index) => (
                                <EachNotification key={index} text={singleNotification} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className='relative cursor-pointer ' onClick={() => { toggleshowHideOptions("Profile") }} onMouseLeave={() => { toggleshowHideOptions("") }}>
                    <img src={ProfileIMG} className='w-11 h-w-11 rounded-full' alt="" />
                    <div className={`absolute -right-2 transition-opacity duration-300 ease-in-out top-15 ${showHideOptions === "Profile" ? " visible opacity-100" : "invisible opacity-0"}`}>
                        {<ProfileDetail />}
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopRightSettings