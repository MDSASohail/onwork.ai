import SyncAlt from '@mui/icons-material/SyncAlt'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import DateRange from './DateRange'

function HeaderSecond() {
    return (
        <div className=' flex justify-between '>
            <div className='    text-center ' >
                <div className='' >
                    {/* className='border-2 border-[#8766FF]' */}
                    <select name="" id="" className='w-40 py-4 px-6 rounded-2xl font-medium   '>

                        <option value="">Domain</option>
                        <option value="">Manage Domain</option>
                        <option value="">View Script</option>

                        <optgroup label='Switch to' className='text-[#8766FF] text-sm'>
                            <option value="">Domain #1</option>
                            <option value="">Domain #2</option>
                            <option value="">Domain #3</option>

                        </optgroup>
                        <optgroup label='Settings'>
                            <option value="">Manage all domains</option>
                            <option value="">Manage Organization</option>
                            <option value="">Add New Domain</option>
                        </optgroup>

                    </select>
                </div>


            </div>
            <DateRange/>

        </div>
    )
}

export default HeaderSecond