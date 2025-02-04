import { MoreVert, Hvac, Pause } from '@mui/icons-material'
import HeartBeat from '../Images/HeartBeat.png'

import { useState } from 'react';
import { deleteCookie } from '../JSFunctions/JavaScriptFunction';
import Toast from './Toast';
const data = [{ id: 1, number: "70,000", increment: "+2 (+18.09%)", text: "Total User", options: ["Total Users", "New Users", "Return user", "Total sessions", "Bounced users", "Bots", "Avg session", "duration", "Avg retention", "Avg Click"] }, { id: 2, number: "56,000", increment: "+1 (+9.09%)", text: "Page views", options: ["Total Page View", "Pages", "Sohail", "Bhumika", "Rishita"] }, { id: 3, number: "30,000", increment: "+2 (+12.09%)", text: "Screen Recording", options: ["Hello", "All Friends", "Highest screen time", "Total screen time", "Avg screen time"] }];

// ,{id:2,number:"56,000", increment:"+1 (+9.09%)", text:"Page views",options:["Total Page View","Pages","Sohail", "Bhumika","Rishita"]},{id:3, number:"30,000", increment:"+2 (+12.09%)", text:"Screen Recording",options:["Hello", "All Friends", "Highest screen time", "Total screen time","Avg screen time" ]}
function TotalDetailComponent() {
    
    return (
        
        <div className='flex lg:justify-between md:justify-center  gap-3  flex-wrap ' >
            {data.map((eachData, index) => <EachDetailSection key={index} indexOfParent={index} number={eachData.number} increment={eachData.increment} text={eachData.text} options={eachData.options} />)}
        </div>
    )
}

export default TotalDetailComponent



function EachDetailSection({ indexOfParent, number, increment, text, options }) {

    const [isOptionsVisible, setIsOptionsVisible] = useState(false); 
    const handleMouseEnter = () => {
        
        setIsOptionsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsOptionsVisible(false);
    };
    return (
        <>
            <div className=' lg:w-[400px] flex-grow w-full p-1 h-28  pl-6 flex justify-between bg-white rounded-2xl' >
                <div className='flex flex-col'>
                    <h1 className='font-medium text-[20px]'>{number}</h1>
                    <span className='text-[#33AF2B] text-[18px]'>{increment}</span>
                    <span className='text-[#8766FF] mt-2'>{text}</span>
                </div>
                
                
                <div className='flex gap-2'>
                <div>
                    <img src={HeartBeat} alt="" className='w-[86px]' />

                </div>

                <div className='flex flex-col justify-evenly'>
                    <div className='relative ' onClick={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <button className={`p-1 hover:bg-hoverBGColor hover:text-white rounded-full ${isOptionsVisible ?"bg-[#8766FF] text-white":""}`}>
                            <MoreVert />
                        </button>
                        <div className={`border-2  md:hidden z-40 border-borderColor px-1 py-3 rounded-2xl w-60 absolute bg-white transition-opacity duration-300 ease-in-out ${indexOfParent===data.length-1?"right-0":""} ${isOptionsVisible ?"visible opacity-100":"invisible opacity-0"}`}>
                            {
                                options.map((eachOption, index) => <p key={index} className='border-b-2 cursor-pointer hover:bg-hoverBGColor px-2 py-3'>{eachOption}</p>)
                            }

                        </div>
                    </div>
                    <div className=' hover:bg-hoverBGColor p-1 rounded-full'>
                        <Hvac className='text-gray-400 hover:text-white ' />
                    </div>
                    <div className=' hover:text-white hover:bg-hoverBGColor p-1 rounded-full'>
                        <Pause className='text-gray-400  hover:text-inherit' />
                    </div>


                </div>

                </div>
                
            </div>
        </>
    )
}