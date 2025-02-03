import { Cancel, Message, Warning } from '@mui/icons-material'
import { useState } from 'react'
const data = { Error: { logo: <Cancel />, color: "text-[#FF4141]", messages: ["Failed to load resource:  net: : EER_NAME_NOT_RESOLVED", "Failed to load resource:  net: : EER_NAME_NOT_RESOLVED","Failed to load resource:  net: : EER_NAME_NOT_RESOLVED", "Failed to load resource:  net: : EER_NAME_NOT_RESOLVED","Failed to load resource:  net: : EER_NAME_NOT_RESOLVED", "Failed to load resource:  net: : EER_NAME_NOT_RESOLVED","Failed to load resource:  net: : EER_NAME_NOT_RESOLVED", "Failed to load resource:  net: : EER_NAME_NOT_RESOLVED","Failed to load resource:  net: : EER_NAME_NOT_RESOLVED", "Failed to load resource:  net: : EER_NAME_NOT_RESOLVED", "Failed to load resource:  net: : EER_NAME_NOT_RESOLVED", "Failed to load resource:  net: : EER_NAME_NOT_RESOLVED", "Failed to load resource:  net: : EER_NAME_NOT_RESOLVED", "Failed to load resource:  net: : EER_NAME_NOT_RESOLVED"] }, Logs: { logo: <Message />, color: "text-[#33AF2B]", messages: ["Failed to load resource:  net: : EER_NAME_logs", "Failed to load resource:  net: : EER_NAME_logs", "Failed to load resource:  net: : EER_NAME_logs", "Failed to load resource:  net: : EER_NAME_logs", "Failed to load resource:  net: : EER_NAME_logs"] }, Warning: { logo: <Warning />, color: "text-[#FFC048]", messages: ["Failed to load resource:  net: : EER_warnings", "Failed to load resource:  net: : EER_warnings", "Failed to load resource:  net: : EER_warnings", "Failed to load resource:  net: : EER_warnings", "Failed to load resource:  net: : EER_warnings"] } }
const buttons = [{textColor:"text-[#FF4141]", text:"Error", icon:<Cancel className='text-[#FF4141]' />},{textColor:"text-[#33AF2B]", text:"Logs", icon:<Message className='text-[#33AF2B]' /> },{textColor:"text-[#FFC048]", text:"Warning", icon: <Warning className='text-[#FFC048]' />}]
function JavaScriptError() {
    const [whichToShow, setWhichToShow] = useState("Error")
    
    return (
        <div className=' w-full h-full  bg-white   rounded-md '>
            <div className='flex justify-between mb-3'>
                {
                    buttons.map((eachBTN, index)=><div key={index} className={`cursor-pointer  pb-1  ${whichToShow === eachBTN.text? "border-borderColor border-b-2" :""}`} onClick={() => setWhichToShow(eachBTN.text)}>
                    <button className={`${eachBTN.textColor} mr-2`}>{eachBTN.text}</button>
                    {eachBTN.icon}
                </div>)
                }
            </div>
            <div className=' max-h-60  overflow-y-auto  styleScrollbar'>
                {data[whichToShow].messages.map((eachMessage, index) => <p key={index} className={`${data[whichToShow].color} my-1`}>
                    {data[whichToShow].logo}
                    <span className=' ml-2'>{eachMessage}</span>
                </p>)

                }
            </div>

            

        </div>
    )
}

export default JavaScriptError