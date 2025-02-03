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
import TopRightSettings from './TopRightSettings';
const notifications = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. ", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. ", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. ", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. ", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. ", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. "]
function HeaderFIrst() {

    const [showHideOptions, setShowHideOptions] = useState("");
    const [showHideInnerOptions, setShowHideInnerOptions] = useState("");


    const toggleshowHideOptions = (whichOne) => {  //It is use to show and hide the inner divs. It is holding the name which one to show.
        setShowHideOptions(whichOne);

        console.log("Run , which", whichOne,showHideOptions)
    }


    const toggleshowHideInnserOptions = (whichInnerOne) => {
        setShowHideInnerOptions(whichInnerOne);
    }
    return (
        <div className='flex justify-between px-3 py-0 items-center '>
            <CompanyLogo/>
            <HeaderDetail/>
            <TopRightSettings/>

        </div>
    )
}

export default HeaderFIrst