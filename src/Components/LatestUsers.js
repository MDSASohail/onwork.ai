import { MoreVert, Map,  PlayCircle , Computer, PhoneAndroid } from '@mui/icons-material'
import { useState } from 'react'
import PlayArrow from '../Images/Polygon 3.png';
import HeatMap from '../Images/HeatMap.png'
const data = [
    [1, "New York", "20-Dec 05:00 AM", "Google", "https://example.com/page1", "3:15", "80%", 15, <PhoneAndroid/>],
    [2, "London", "20-Dec 05:30 AM", "Bing", "https://example.com/page2", "2:45", "70%", 10, <PhoneAndroid/>],
    [3, "Sydney", "20-Dec 06:00 AM", "Facebook", "https://example.com/page3", "4:00", "65%", 20, <Computer/>],
    [4, "Mumbai", "20-Dec 06:15 AM", "Yahoo", "https://example.com/page4", "3:00", "85%", 12, <PhoneAndroid/>],
    [5, "Tokyo", "20-Dec 06:45 AM", "DuckDuckGo", "https://example.com/page5", "3:30", "90%", 18, <PhoneAndroid/>],
    [6, "Berlin", "20-Dec 07:00 AM", "Reddit", "https://example.com/page6", "2:20", "75%", 8, <Computer/>],
    [7, "Paris", "20-Dec 07:15 AM", "Twitter", "https://example.com/page7", "3:50", "60%", 14, <PhoneAndroid/>],
    [8, "Dubai", "20-Dec 07:30 AM", "Instagram", "https://example.com/page8", "4:10", "95%", 22, <Computer/>],
    [9, "Singapore", "20-Dec 08:00 AM", "LinkedIn", "https://example.com/page9", "3:25", "68%", 11, <PhoneAndroid/>],
    [10, "Cape Town", "20-Dec 08:15 AM", "Pinterest", "https://example.com/page10", "2:50", "73%", 9, <PhoneAndroid/>],
    [11, "San Francisco", "20-Dec 08:30 AM", "Quora", "https://example.com/page11", "3:40", "78%", 16, <PhoneAndroid/>],
    [12, "Toronto", "20-Dec 08:45 AM", "Snapchat", "https://example.com/page12", "3:10", "88%", 17, <Computer/>],
    [13, "Moscow", "20-Dec 09:00 AM", "TikTok", "https://example.com/page13", "4:05", "92%", 24, <PhoneAndroid/>],
    [14, "Seoul", "20-Dec 09:15 AM", "Weibo", "https://example.com/page14", "3:20", "62%", 13, <PhoneAndroid/>],
    [15, "Bangkok", "20-Dec 09:30 AM", "Telegram", "https://example.com/page15", "2:55", "83%", 7, <Computer/>],
    [16, "Kuala Lumpur", "20-Dec 09:45 AM", "WhatsApp", "https://example.com/page16", "3:05", "67%", 6, <PhoneAndroid/>],
    [17, "Los Angeles", "20-Dec 10:00 AM", "Medium", "https://example.com/page17", "3:30", "81%", 19, <PhoneAndroid/>],
    [18, "Hong Kong", "20-Dec 10:15 AM", "GitHub", "https://example.com/page18", "2:40", "86%", 5, <Computer/>],
    [19, "Beijing", "20-Dec 10:30 AM", "StackOverflow", "https://example.com/page19", "3:45", "89%", 21, <Computer/>],
    [20, "Istanbul", "20-Dec 10:45 AM", "Reddit", "https://example.com/page20", "4:20", "93%", 25, <PhoneAndroid/>],
    [21, "Delhi", "20-Dec 11:00 AM", "Google India", "https://example.in/page21", "3:20", "85%", 12, <Computer/>],
    [22, "Mumbai", "20-Dec 11:15 AM", "Flipkart", "https://example.in/page22", "3:50", "90%", 14, <PhoneAndroid/>],
    [23, "Bangalore", "20-Dec 11:30 AM", "Amazon India", "https://example.in/page23", "4:00", "95%", 18, <PhoneAndroid/>],
    [24, "Hyderabad", "20-Dec 11:45 AM", "Snapdeal", "https://example.in/page24", "2:50", "80%", 10, <Computer/>],
    [25, "Chennai", "20-Dec 12:00 PM", "Zomato", "https://example.in/page25", "3:10", "88%", 16, <PhoneAndroid/>],
    [26, "Kolkata", "20-Dec 12:15 PM", "Swiggy", "https://example.in/page26", "3:45", "87%", 13, <PhoneAndroid/>],
    [27, "Pune", "20-Dec 12:30 PM", "Jio", "https://example.in/page27", "2:40", "75%", 9, <Computer/>],
    [28, "Ahmedabad", "20-Dec 12:45 PM", "Paytm", "https://example.in/page28", "3:30", "92%", 15, <PhoneAndroid/>],
    [29, "Jaipur", "20-Dec 01:00 PM", "MakeMyTrip", "https://example.in/page29", "4:10", "93%", 20, <PhoneAndroid/>],
    [30, "Lucknow", "20-Dec 01:15 PM", "BookMyShow", "https://example.in/page30", "3:00", "77%", 11, <PhoneAndroid/>],
    [31, "Indore", "20-Dec 01:30 PM", "OLA Cabs", "https://example.in/page31", "3:25", "84%", 12, <Computer/>],
    [32, "Surat", "20-Dec 01:45 PM", "Uber India", "https://example.in/page32", "2:30", "72%", 8, <PhoneAndroid/>],
    [33, "Nagpur", "20-Dec 02:00 PM", "IRCTC", "https://example.in/page33", "3:15", "86%", 13, <PhoneAndroid/>],
    [34, "Bhopal", "20-Dec 02:15 PM", "Hike Messenger", "https://example.in/page34", "3:35", "91%", 14, <PhoneAndroid/>],
    [35, "Patna", "20-Dec 02:30 PM", "Gaana", "https://example.in/page35", "4:00", "94%", 19, <PhoneAndroid/>],
    [36, "Thiruvananthapuram", "20-Dec 02:45 PM", "Hotstar", "https://example.in/page36", "3:50", "83%", 12, <Computer/>],
    [37, "Vadodara", "20-Dec 03:00 PM", "BigBasket", "https://example.in/page37", "3:20", "79%", 11, <PhoneAndroid/>],
    [38, "Kanpur", "20-Dec 03:15 PM", "Myntra", "https://example.in/page38", "2:45", "88%", 9, <PhoneAndroid/>],
    [39, "Amritsar", "20-Dec 03:30 PM", "Pepperfry", "https://example.in/page39", "3:40", "90%", 14, <PhoneAndroid/>],
    [40, "Coimbatore", "20-Dec 03:45 PM", "CRED", "https://example.in/page40", "3:05", "85%", 10, <Computer/>],
  
  ];
  function LatestUsers() {
    const [indexPage, setIndexPage] = useState({ index: 0, noOfRows: 10 });
    
    // console.log("Array is ", indexPage,data.length % indexPage.noOfRows)

    const handleNoOfRowChange = (e) => {
        setIndexPage((pre) => ({ ...pre, noOfRows: +e.target.value }))
    }
    return (
        <div style={{ boxShadow: '0 4px 6px rgba(135, 102, 255, 0.3)' }} className=' px-3 py-3 my-4 shadow-2xl bg-white  rounded-3xl  '>
            <div className='flex justify-between  py-2'>
                <h2 className='text-[#8766FF] text-2xl'>Latest Users</h2>
                <MoreVert />

            </div>
            <hr className='text-[#D3D1D1] font-bold' />

            <div className="h-[433px] overflow-hidden ">
                
                <div className="styleScrollbar h-[96%] overflow-y-scroll">
                    <table className="table-auto w-full">
                    <thead className=''>
                        <tr className="h-[40px] stic sticky bg-white top-0">
                            <th>S.No</th>
                            <th className=' text-left pl-3'>Location</th>
                            <th className=' text-left'>Entry time</th>
                            <th className=' text-left'>Refferer</th>
                            <th className=' text-left'>URL</th>
                            <th>Retention</th>
                            <th>Scroll</th>
                            <th>Click</th>
                            <th>Heat Map</th>
                            <th>Session</th>
                        </tr>
                    </thead>
                        <tbody className="text-[#9F9F9F] ">
                            {data
                                .slice(indexPage.index * indexPage.noOfRows, indexPage.index * indexPage.noOfRows + indexPage.noOfRows)
                                .map((eachData, index) => (
                                    <tr
                                        key={index}
                                        className="text-center hover:bg-[#EAF1FF] transition-colors hover:text-black border-b-2  border-[#CAC7C7] h-[40px]"
                                    >
                                        <td className=''>{eachData[0] } {eachData[8]}</td>
                                        <td className=' text-left pl-3'>{eachData[1]}</td>
                                        <td className=' text-left'>{eachData[2]}</td>
                                        <td className=' text-left'>{eachData[3]}</td>
                                        <td className=' text-left'>{eachData[4]}</td>
                                        <td className=''>{eachData[5]}</td>
                                        <td className=''>{eachData[6]}</td>
                                        <td className=''  >{eachData[7]}</td>
                                        <td className='' ><img src={HeatMap} className='w-6  mx-auto ' /></td>
                                        <td className='' ><img src={PlayArrow}  className='w-4  mx-auto'/></td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='   flex justify-between my-1  '>
                <div>
                    <button disabled={indexPage.index === 0} className={`px-3 py-2 mr-3  w-20 rounded-xl transition-opacity duration-300 ${indexPage.index === 0? " opacity-0  pointer-events-none":" opacity-100 bg-[#8766FF]  text-[#F5F5F5]"}`} onClick={()=>{setIndexPage((pre)=>({...pre, index: pre.index-1}))}}>Previous</button>
                    {Array.from({length:Math.ceil(data.length / indexPage.noOfRows)},(_, index)=><button key={index} className={`px-2 py-2  mx-1 rounded-lg ${indexPage.index===index? "bg-[#8766FF]  text-[#F5F5F5]":"bg-[#E6E6E6] text-[#808080]"}`} onClick={() => setIndexPage((pre => ({ ...pre, index: index })))}>{index +1 }</button>)}
                    <button disabled={indexPage.index === Math.ceil(data.length / indexPage.noOfRows)-1} className={`px-3 py-2 ml-3   w-20 rounded-xl transition-opacity duration-300 ${indexPage.index === Math.ceil(data.length / indexPage.noOfRows) -1?"opacity-0  pointer-events-none": "opacity-100 bg-[#8766FF]  text-[#F5F5F5]"}`} onClick={()=>{setIndexPage((pre)=>({...pre, index: pre.index + 1}))}}>Next</button>
                </div>
                <div>
                    <select onChange={handleNoOfRowChange} name="" id="" className='px-3 py-2  bg-[#8766FF] w-40 rounded-xl text-[#F5F5F5]'>
                        <option className='text-white' value="Rows per page" defaultValue={"Prows per page"} disabled>Rows per page</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                    </select>
                </div>

            </div>

        </div>
    )
}

export default LatestUsers
