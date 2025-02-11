import NotificationIcon from '../Images/Notification.png'
import NotificationIconHover from '../Images/Notification Hover.png'

function EachNotification({text}) {
  return (
    <div className=' border-gray-400 flex items-center transition-colors text-textLightColor w-full px-2 py-2 hover:bg-[#ded6ff] hover:text-black group'>
         <div className=' p-1 '>
         <img src={NotificationIcon} className=' '/>
         </div>
         <p className='w-[80%] mx-2   leading-5 font-medium' >{text}</p>
         <button className='bg-white group-hover:border-2 cursor-pointer transition-colors group-hover:text-black  group-hover:border-borderColor px-3 py-1 rounded-2xl text-white'>CTA</button>
    </div>
  )
}

export default EachNotification