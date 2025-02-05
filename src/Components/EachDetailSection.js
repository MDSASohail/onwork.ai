import { MoreVert } from '@mui/icons-material'
import HeatMaps from '../Images/Heat Map.png'
import JavaScriptError from './JavaScriptError'
function EachDetailSection({ MiddleComponent, data, heading }) {
    return (
        // <div className=' w-96 bg-white rounded-md'>
        //     <div className=' relative  p-3'>
        //         <h1 className='text-center font-medium text-[#8766FF] text-2xl'>Heatmaps</h1>
        //          <MoreVert className='absolute right-2 top-4'/>
        //     </div>
        //     <div className='text-center mt-6 mb-3 p-3'>
        //         <img src={HeatMaps} alt="" className='rounded-md mx-auto' />
        //         <strong className='block text-2xl'>12</strong>
        //         <span className='text-[#33AF2B]'>+1(+100.00%)</span>
        //     </div>
        //     <hr />
        //     <div className='flex justify-between text-center mt-2 p-3'>
        //         <div>
        //             <p className='text-[#808080]'>Total clicks</p>
        //             <strong>100</strong>
        //         </div>
        //         <div>
        //             <p className='text-[#808080]'>Avg click per page</p>
        //             <strong>60</strong>
        //         </div>
        //         <div>
        //             <p className='text-[#808080]'>Avg scroll</p>
        //             <strong>60%</strong>
        //         </div>
        //     </div>

        // </div>
        <div style={{ boxShadow: '0 4px 6px rgba(135, 102, 255, 0.3)' }} className='  lg:w-[400px] flex-grow w-full  bg-white rounded-2xl p-4 shadow-2xl   my-1 flex flex-col'>
            <div className=' relative z-0  px-3 py-2'>
                <h1 className='text-center  -z-20 font-medium text-[#8766FF] text-xl'>{heading}</h1>
                <MoreVert className='absolute right-2 top-2' />
            </div>

            <div className='my-2 min-h-72 overflow-hidden border- border-red-900  flex justify-center  '>
                  
                <MiddleComponent className=""/>
            </div >

            <hr />

            <div className='flex border- border-blue-800 justify-between text-center mt-1 px-3 py-2'>
                {
                    data.map((eachFooterDetail, index) => <div className='flex flex-col  justify-center' key={index}>
                        <p className='text-[#808080] text-sm'>{eachFooterDetail.text}</p>
                        <strong className='' >{eachFooterDetail.value}</strong>
                    </div>)
                }

            </div>
            

        </div>
    )
}

export default EachDetailSection