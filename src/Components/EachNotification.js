import {NotificationsActive} from '@mui/icons-material'

function EachNotification({text}) {
  return (
    <div className=' border-gray-400 flex items-center w-full px-2 py-2 hover:bg-[#8766FF] hover:text-black '>
         <div className='bg-[#8766FF] p-1 rounded-full'>
         <NotificationsActive className='text-white '/>
         </div>
         <p className='w-[80%] mx-2   leading-5' >{text}</p>
         <span>2 min</span>
    </div>
  )
}

export default EachNotification