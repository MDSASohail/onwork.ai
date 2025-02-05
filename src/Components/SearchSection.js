import Send from '@mui/icons-material/Send'
import FilterIcon from "@mui/icons-material/FilterList"
import Download from "@mui/icons-material/Download"
import GeminiIcon from '../Images/GeminiIcon.png'
function SearchSection({setisFilterOn}) {
    return (
        <div className='   flex justify-between items-center bg-white px-4  rounded-xl'>
            <div className=' flex items-center rounded-xl py-1 px-3 bg-[#EAF0FF] flex-1 mr-5 justify-between overflow-hidden'>
                <img src={GeminiIcon}  alt="" className=' h-8' />
                <input type="text" className='outline-none flex-1 text-lg bg-transparent pl-2' placeholder='Ask me anything'  />
                <Send/>
            </div>
            <div className='flex flex-col items-center m-2 cursor-pointer' onClick={()=>{setisFilterOn(preValue => !preValue)}}>
                <FilterIcon style={{fontSize:"20px"}}/>
                <span className='text-sm'>Filter</span>
            </div>
            <div className='flex flex-col items-center m-2'>
                <Download style={{fontSize:"20px"}}/>
                <span className='text-sm'>Download</span>
            </div>
           
        </div>
    )
}

export default SearchSection