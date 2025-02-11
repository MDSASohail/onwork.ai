import { MoreVert, Map, PlayCircle, Computer, PhoneAndroid, FilterList, Star, PlayArrow, ArrowDropDown } from '@mui/icons-material'
import { useState, useMemo } from 'react'
// import PlayArrow from '../Images/Polygon 3.png';
import HeatMap from '../Images/HeatMap.png'
import DateRange from './DateRange';
import { Button } from '@mui/material';
const tableData = [
  {
    SNo: 1,
    Country: "USA",
    DateTime: "2025-01-21 10:05:23",
    Pages: "/contact",
    URL: "https://example.com/home",
    Duration: "2m 15s",
    Device: "Desktop",
    Browser: "Chrome",
    OS: "Windows 11",
    SessionActive: false
  },
  {
    SNo: 2,
    Country: "India",
    DateTime: "2025-01-21 11:12:47",
    Pages: "/contact",
    URL: "https://example.com/about",
    Duration: "1m 45s",
    Device: "Mobile",
    Browser: "Safari",
    OS: "iOS 17",
    SessionActive: true
  },
  {
    SNo: 3,
    Country: "UK",
    DateTime: "2025-01-21 09:30:12",
    Pages: "/contact",
    URL: "https://example.com/contact",
    Duration: "3m 10s",
    Device: "Tablet",
    Browser: "Firefox",
    OS: "Android 14",
    SessionActive: false
  },
  {
    SNo: 4,
    Country: "Canada",
    DateTime: "2025-01-21 14:05:33",
    Pages: "/contact",
    URL: "https://example.com/services",
    Duration: "2m 30s",
    Device: "Laptop",
    Browser: "Edge",
    OS: "Windows 10",
    SessionActive: true
  },
  {
    SNo: 5,
    Country: "Germany",
    DateTime: "2025-01-21 16:20:15",
    Pages: "/contact",
    URL: "https://example.com/pricing",
    Duration: "4m 05s",
    Device: "Desktop",
    Browser: "Opera",
    OS: "Linux",
    SessionActive: true
  },
  {
    SNo: 6,
    Country: "France",
    DateTime: "2025-01-21 13:10:55",
    Pages: "/contact",
    URL: "https://example.com/blog",
    Duration: "1m 20s",
    Device: "Mobile",
    Browser: "Chrome",
    OS: "Android 13",
    SessionActive: true
  },
  {
    SNo: 7,
    Country: "Australia",
    DateTime: "2025-01-21 18:45:10",
    Pages: "/contact",
    URL: "https://example.com/faq",
    Duration: "5m 15s",
    Device: "Tablet",
    Browser: "Safari",
    OS: "iPadOS 16",
    SessionActive: false
  },
  {
    SNo: 8,
    Country: "Japan",
    DateTime: "2025-01-21 07:25:40",
    Pages: "/contact",
    URL: "https://example.com/careers",
    Duration: "3m 45s",
    Device: "Desktop",
    Browser: "Edge",
    OS: "Windows 11",
    SessionActive: false
  },
  {
    SNo: 9,
    Country: "Brazil",
    DateTime: "2025-01-21 21:30:05",
    Pages: "/contact",
    URL: "https://example.com/support",
    Duration: "2m 50s",
    Device: "Mobile",
    Browser: "Firefox",
    OS: "Android 14",
    SessionActive: false
  },
  {
    SNo: 10,
    Country: "Italy",
    DateTime: "2025-01-21 23:12:18",
    Pages: "/contact",
    URL: "https://example.com/terms",
    Duration: "1m 55s",
    Device: "Laptop",
    Browser: "Chrome",
    OS: "MacOS Ventura",
    SessionActive: true
  },
  {
    SNo: 11,
    Country: "USA",
    DateTime: "2025-01-21 10:05:23",
    Pages: "/contact",
    URL: "https://example.com/home",
    Duration: "2m 15s",
    Device: "Desktop",
    Browser: "Chrome",
    OS: "Windows 11",
    SessionActive: true
  },
  {
    SNo: 12,
    Country: "India",
    DateTime: "2025-01-21 11:12:47",
    Pages: "/contact",
    URL: "https://example.com/about",
    Duration: "1m 45s",
    Device: "Mobile",
    Browser: "Safari",
    OS: "iOS 17",
    SessionActive: false
  },
  {
    SNo: 13,
    Country: "UK",
    DateTime: "2025-01-21 09:30:12",
    Pages: "/contact",
    URL: "https://example.com/contact",
    Duration: "3m 10s",
    Device: "Tablet",
    Browser: "Firefox",
    OS: "Android 14",
    SessionActive: true
  },
  {
    SNo: 14,
    Country: "Canada",
    DateTime: "2025-01-21 14:05:33",
    Pages: "/contact",
    URL: "https://example.com/services",
    Duration: "2m 30s",
    Device: "Laptop",
    Browser: "Edge",
    OS: "Windows 10",
    SessionActive: false
  },
  {
    SNo: 15,
    Country: "Germany",
    DateTime: "2025-01-21 16:20:15",
    Pages: "/contact",
    URL: "https://example.com/pricing",
    Duration: "4m 05s",
    Device: "Desktop",
    Browser: "Opera",
    OS: "Linux",
    SessionActive: true
  },
  {
    SNo: 16,
    Country: "France",
    DateTime: "2025-01-21 13:10:55",
    Pages: "/contact",
    URL: "https://example.com/blog",
    Duration: "1m 20s",
    Device: "Mobile",
    Browser: "Chrome",
    OS: "Android 13",
    SessionActive: false
  },
  {
    SNo: 17,
    Country: "Australia",
    DateTime: "2025-01-21 18:45:10",
    Pages: "/contact",
    URL: "https://example.com/faq",
    Duration: "5m 15s",
    Device: "Tablet",
    Browser: "Safari",
    OS: "iPadOS 16",
    SessionActive: true
  },
  {
    SNo: 18,
    Country: "Japan",
    DateTime: "2025-01-21 07:25:40",
    Pages: "/contact",
    URL: "https://example.com/careers",
    Duration: "3m 45s",
    Device: "Desktop",
    Browser: "Edge",
    OS: "Windows 11",
    SessionActive: false
  },
  {
    SNo: 19,
    Country: "Brazil",
    DateTime: "2025-01-21 21:30:05",
    Pages: "/contact",
    URL: "https://example.com/support",
    Duration: "2m 50s",
    Device: "Mobile",
    Browser: "Firefox",
    OS: "Android 14",
    SessionActive: true
  },
  {
    SNo: 20,
    Country: "Italy",
    DateTime: "2025-01-21 23:12:18",
    Pages: "/contact",
    URL: "https://example.com/terms",
    Duration: "1m 55s",
    Device: "Laptop",
    Browser: "Chrome",
    OS: "MacOS Ventura",
    SessionActive: true
  }
];
function SessionRecording() {

  const [indexPage, setIndexPage] = useState({ index: 0, noOfRows: 10 }); //It decide the no. of rows in a pages.
  const [whichSession, setWhichSession] = useState(null)  //true = active session, false = Completed Sessions, null = All Sessions

  //Filter data from tableData according to active, completed. or all sessions;
  const filteredData = useMemo(() => {
    setIndexPage(pre => ({ ...pre, index: 0 }))

    const dataAfterFiltering = tableData.filter(eachData => whichSession === null || (whichSession === true && eachData.SessionActive === true) || (whichSession === false && eachData.SessionActive === false))

    return dataAfterFiltering;

  }, [whichSession])

  const totalPages = Math.ceil(filteredData.length / indexPage.noOfRows)
  // console.log("Array is ", indexPage,data.length % indexPage.noOfRows)

  const handleNoOfRowChange = (e) => {
    setIndexPage((pre) => ({ index: 0, noOfRows: +e.target.value }))

  }
  return (
    <div style={{ boxShadow: '0  4px 6px rgba(135, 102, 255, 0.3)' }} className=' px-3 py-3 my-10 shadow-2xl bg-white  rounded-3xl relative  '>
      <div className='border-2 font-medium absolute -top-6 left-10 py-2 rounded-xl bg-white border-borderColor px-4 flex items-center'>
        <div className='text-borderColor text-xl md:text-xl'><PlayArrow /></div>
        <h2 className='ml-3 text-2xl'>Session Recording</h2>


      </div>

      <div className=' rounded-lg flex flex-col xl:flex-row  justify-between my-10 text-[#9F9F9F] '>
        <div className='border-2 rounded-xl my-2 flex justify-evenly r  min-w-[550px] w-auto'>
          <button onClick={() => { setWhichSession(null) }} className={` my-2 border-r-2 inline-block flex-grow text-center py-1   ${whichSession === null ? "text-borderColor" : "hover:text-borderColor"}`}>All Sessions</button>
          <button onClick={() => { setWhichSession(false) }} className={`  my-2 border-r-2 inline-block flex-grow text-center py-1   ${whichSession === false ? "text-borderColor" : "hover:text-borderColor"}`}>Completed Sessions</button>
          <button onClick={() => { setWhichSession(true) }} className={`  my-2 border-r-2 inline-block flex-grow text-center py-1 ${whichSession === true ? "text-borderColor" : "hover:text-borderColor"}`}>Active Sessions</button>
          <button className='my-2 py-1 flex-grow'><Star /></button>

        </div>

        <div className='flex items-center gap-3 justify-end z-30'>
          <div className='border-2 rounded-xl py-1 mx-2'><button><DateRange /></button></div>
          <div className='border-2 rounded-xl py-2 mx-2 px-3'><button><FilterList /></button></div>
          <div className='border-2 rounded-xl py-2 ml-2 px-3'><button>All Users <ArrowDropDown /></button></div>

        </div>

      </div>


      <div className="h-[433px] overflow-hidden ">

        <div className="styleScrollbar h-[96%] overflow-y-scroll">
          <table className="min-w-[1400px] w-full ">
            <thead className=''>
              <tr className="h-[40px]  sticky bg-white top-0 z-10 ">

                <th>S.No</th>
                <th className=' text-left pl-3'>Country</th>
                <th className=' text-left'>Date/Time</th>
                <th className=' text-left'>Pages</th>
                <th className=' text-left'>URL</th>
                <th>Duration</th>
                <th>Device</th>
                <th className=' text-left '>Browser</th>
                <th className=' text-left'>OS</th>
                <th>Session</th>
              </tr>
            </thead>
            <tbody className="text-[#9F9F9F] ">
              {filteredData.slice(indexPage.index * indexPage.noOfRows, indexPage.index * indexPage.noOfRows + indexPage.noOfRows)
                .map((eachData, index) => (
                  <tr
                    key={index}
                    className="text-center relative hover:bg-[#EAF1FF] transition-colors hover:text-black border-b-2  border-[#CAC7C7] h-[40px]"
                  >

                    <td className=''> {eachData.SessionActive === true ? <span className='w-2 absolute top-4 left-4 h-2 rounded-full inline-block bg-green-800'></span> : ""} {eachData.SNo} (12345)</td>
                    <td className=' text-left pl-3'>{eachData.Country}</td>
                    <td className=' text-left'>{eachData.DateTime}</td>
                    <td className=' text-left'>{eachData.Pages}</td>
                    <td className=' text-left'>{eachData.URL}</td>
                    <td className=''>{eachData.Duration}</td>
                    <td className=''>{eachData.Device == 'Desktop' ? <Computer /> : <PhoneAndroid />}</td>
                    <td className='text-left'  >{eachData.Browser}</td>
                    <td className='text-left'  >{eachData.OS}</td>
                    <td className='' ><PlayArrow /></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='   flex justify-between my-1  '>
        <div>
          <button disabled={indexPage.index === 0} className={`px-3 py-2 mr-3  w-20 rounded-xl transition-opacity duration-300 ${indexPage.index === 0 ? " opacity-0  pointer-events-none" : " opacity-100 bg-[#8766FF]  text-[#F5F5F5]"}`} onClick={() => { setIndexPage((pre) => ({ ...pre, index: pre.index - 1 })) }}>Previous</button>
          {Array.from({ length: totalPages }, (_, index) => <button key={index} className={`px-2 py-2  mx-1 rounded-lg ${indexPage.index === index ? "bg-[#8766FF]  text-[#F5F5F5]" : "bg-[#E6E6E6] text-[#808080]"}`} onClick={() => setIndexPage((pre => ({ ...pre, index: index })))}>{index + 1}</button>)}
          <button disabled={indexPage.index === totalPages - 1} className={`px-3 py-2 ml-3   w-20 rounded-xl transition-opacity duration-300 ${indexPage.index === totalPages - 1 ? "opacity-0  pointer-events-none" : "opacity-100 bg-[#8766FF]  text-[#F5F5F5]"}`} onClick={() => { setIndexPage((pre) => ({ ...pre, index: pre.index + 1 })) }}>Next</button>
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

export default SessionRecording
