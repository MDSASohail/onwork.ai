import SyncAlt from '@mui/icons-material/SyncAlt'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
function DateRange({text}){
    return(
        <>
         {/* <div className=' border-2 border-green-950 ml-[2%]'> */}
                
                <div className='flex  items-center'>
                    <h1 className='text-white text-lg font-medium'>{text}</h1>
                    <div className='py-1 ml-2 border- border-red-900 bg-white rounded-xl w-36 flex justify-between px-3'>
                        <span>From </span>
                        <span><SyncAlt color='red' /></span>
                        <span>To</span>
                        <ArrowDropDown />
                    </div>

                </div>
            {/* </div> */}
        </>
    )
}


export default DateRange