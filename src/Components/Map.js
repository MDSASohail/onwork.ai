import HeatMaps from '../Images/Heat Map.png'
import ScreenRecording from '../Images/ScreenRecording.png'
function Map() {
    return (
        <>

            <div className='text-center w-full'>
                <img src={HeatMaps} alt="" className='rounded-md mx-auto' />
                <strong className='block text-2xl'>12</strong>
                <span className='text-[#33AF2B]'>+1(+100.00%)</span>
            </div>
        </>
    )
}


export default Map;