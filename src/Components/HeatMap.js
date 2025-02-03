import { Computer, FilterList, PhoneAndroid, Search, Star } from '@mui/icons-material';
import HeatMapIMG from '../Images/HeatMap.png';
import DateRange from './DateRange';
import { useMemo, useState } from 'react';
const tableData = [
    {
        SNo: 1,
        Title: "/page/8/",
        TotalClicks: 92,
        PageViews: "/page/4",
        URL: "https://example.com/page43",
        AverageRetention: 100,
        Device: "Desktop"
    },
    {
        SNo: 2,
        Title: "/page/9/",
        TotalClicks: 92,
        PageViews: "/page/1",
        URL: "https://example.com/page19",
        AverageRetention: 52,
        Device: "Mobile"
    },
    {
        SNo: 3,
        Title: "/page/2/",
        TotalClicks: 62,
        PageViews: "/page/4",
        URL: "https://example.com/page98",
        AverageRetention: 138,
        Device: "Desktop"
    },
    {
        SNo: 4,
        Title: "/page/4/",
        TotalClicks: 40,
        PageViews: "/page/8",
        URL: "https://example.com/page6",
        AverageRetention: 56,
        Device: "Mobile"
    },
    {
        SNo: 5,
        Title: "/page/9/",
        TotalClicks: 72,
        PageViews: "/page/9",
        URL: "https://example.com/page73",
        AverageRetention: 101,
        Device: "Desktop"
    },
    {
        SNo: 6,
        Title: "/page/6/",
        TotalClicks: 73,
        PageViews: "/page/1",
        URL: "https://example.com/page25",
        AverageRetention: 76,
        Device: "Mobile"
    },
    {
        SNo: 7,
        Title: "/page/2/",
        TotalClicks: 61,
        PageViews: "/page/3",
        URL: "https://example.com/page96",
        AverageRetention: 93,
        Device: "Desktop"
    },
    {
        SNo: 8,
        Title: "/page/3/",
        TotalClicks: 17,
        PageViews: "/page/1",
        URL: "https://example.com/page35",
        AverageRetention: 76,
        Device: "Mobile"
    },
    {
        SNo: 9,
        Title: "/page/8/",
        TotalClicks: 52,
        PageViews: "/page/8",
        URL: "https://example.com/page26",
        AverageRetention: 74,
        Device: "Tablet"
    },
    {
        SNo: 10,
        Title: "/page/9/",
        TotalClicks: 59,
        PageViews: "/page/2",
        URL: "https://example.com/page6",
        AverageRetention: 107,
        Device: "Tablet"
    },
    {
        SNo: 11,
        Title: "/page/2/",
        TotalClicks: 20,
        PageViews: "/page/10",
        URL: "https://example.com/page85",
        AverageRetention: 56,
        Device: "Desktop"
    },
    {
        SNo: 12,
        Title: "/page/1/",
        TotalClicks: 96,
        PageViews: "/page/10",
        URL: "https://example.com/page4",
        AverageRetention: 113,
        Device: "Desktop"
    },
    {
        SNo: 13,
        Title: "/page/7/",
        TotalClicks: 78,
        PageViews: "/page/2",
        URL: "https://example.com/page33",
        AverageRetention: 76,
        Device: "Desktop"
    },
    {
        SNo: 14,
        Title: "/page/3/",
        TotalClicks: 86,
        PageViews: "/page/5",
        URL: "https://example.com/page24",
        AverageRetention: 97,
        Device: "Mobile"
    },
    {
        SNo: 15,
        Title: "/page/8/",
        TotalClicks: 89,
        PageViews: "/page/10",
        URL: "https://example.com/page22",
        AverageRetention: 69,
        Device: "Desktop"
    },
    {
        SNo: 16,
        Title: "/page/2/",
        TotalClicks: 27,
        PageViews: "/page/5",
        URL: "https://example.com/page70",
        AverageRetention: 66,
        Device: "Desktop"
    },
    {
        SNo: 17,
        Title: "/page/7/",
        TotalClicks: 30,
        PageViews: "/page/9",
        URL: "https://example.com/page80",
        AverageRetention: 108,
        Device: "Mobile"
    },
    {
        SNo: 18,
        Title: "/page/10/",
        TotalClicks: 90,
        PageViews: "/page/10",
        URL: "https://example.com/page100",
        AverageRetention: 99,
        Device: "Mobile"
    },
    {
        SNo: 19,
        Title: "/page/7/",
        TotalClicks: 87,
        PageViews: "/page/10",
        URL: "https://example.com/page19",
        AverageRetention: 77,
        Device: "Mobile"
    },
    {
        SNo: 20,
        Title: "/page/6/",
        TotalClicks: 33,
        PageViews: "/page/1",
        URL: "https://example.com/page93",
        AverageRetention: 55,
        Device: "Mobile"
    },
    {
        SNo: 21,
        Title: "/page/7/",
        TotalClicks: 71,
        PageViews: "/page/6",
        URL: "https://example.com/page90",
        AverageRetention: 78,
        Device: "Desktop"
    },
    {
        SNo: 22,
        Title: "/page/6/",
        TotalClicks: 60,
        PageViews: "/page/3",
        URL: "https://example.com/page43",
        AverageRetention: 71,
        Device: "Mobile"
    },
    {
        SNo: 23,
        Title: "/page/6/",
        TotalClicks: 33,
        PageViews: "/page/10",
        URL: "https://example.com/page1",
        AverageRetention: 92,
        Device: "Mobile"
    },
    {
        SNo: 24,
        Title: "/page/4/",
        TotalClicks: 47,
        PageViews: "/page/6",
        URL: "https://example.com/page53",
        AverageRetention: 136,
        Device: "Mobile"
    },
    {
        SNo: 25,
        Title: "/page/5/",
        TotalClicks: 74,
        PageViews: "/page/7",
        URL: "https://example.com/page49",
        AverageRetention: 120,
        Device: "Desktop"
    }
]


function HeatMap() {

    const [indexPage, setIndexPage] = useState({ index: 0, noOfRows: 10 }); //It decide the no. of data in a pages.

    //It filter the data
    const filteredData = useMemo(() => {


        setIndexPage(pre => ({ ...pre, index: 0 }))

        const dataAfterFiltering = tableData.sort((first, second) => second.TotalClicks - first.TotalClicks)

        return dataAfterFiltering;

    }, [])

    const totalPages = Math.ceil(filteredData.length / indexPage.noOfRows)
    const handleNoOfRowChange = (e) => {
        setIndexPage((pre) => ({ index: 0, noOfRows: +e.target.value }))
        
    }
    return (
        <>
            <div className="bg-white rounded-xl px-4 relative text-textLightColor py-12 my-10">

                <div className='border-2 font-medium absolute text-black -top-6 left-10 py-2 rounded-xl bg-white border-borderColor px-4 flex items-center'>
                    <img src={HeatMapIMG} alt="HeatMap" className='w-5 h-5' />
                    <h2 className='ml-3 text-2xl'>Heatmap</h2>
                </div>

                <div className='lg:flex justify-between '>
                    <div className='border-2 border-textLightColor rounded-xl flex w-full lg:w-80 gap-3 p-2 my-2'>
                        <input className='outline-none flex-grow' placeholder='Enter a URL to search' />
                        <div className='border-r-2  pr-2'>
                            <Search />
                        </div>
                        <div >
                            <Star />
                        </div>

                    </div>

                    <div className='gap-3 flex items-center justify-end my-2'>
                        <div className='border-2 rounded-xl py-1 '><button><DateRange /></button></div>
                        <div className='border-2 rounded-xl py-2  px-3'><button><FilterList /></button></div>
                        <div className='border-2 rounded-xl py-2  px-3'><button>All Users</button></div>

                    </div>
                </div>

                <div className="h-[433px] overflow-hidden">

                    <div className="styleScrollbar h-[96%] overflow-y-scroll">
                        <table className="table-auto w-full">
                            <thead className=''>
                                <tr className="h-[40px]  sticky bg-white top-0 z-10">

                                    <th>S.No</th>
                                    <th >Title</th>
                                    <th>Total clicks</th>
                                    <th >Pages views</th>
                                    <th >Average clicks</th>
                                    <th >Average Retention</th>
                                    <th>Device</th>
                                    <th className='text-center'>Heatmap</th>
                                </tr>
                            </thead>
                            <tbody className="text-[#9F9F9F] ">
                                {filteredData.slice(indexPage.index * indexPage.noOfRows, indexPage.index * indexPage.noOfRows + indexPage.noOfRows)
                                    .map((eachData, index) => (
                                        <tr
                                            key={index}
                                            className="text-center relative hover:bg-[#EAF1FF] transition-colors hover:text-black border-b-2  border-[#CAC7C7] h-[40px]"
                                        >


                                            <td >{eachData.SNo}</td>
                                            <td >{eachData.Title}</td>
                                            <td>{eachData.TotalClicks}</td>
                                            <td >
                                                <div className='w-full h-3 border-2  rounded-xl border-textLightColor group hover:border-borderColor transition-colors'>
                                                    <div className='h-full bg-textLightColor   group-hover:bg-borderColor  rounded-2xl' style={{ width: `${eachData.TotalClicks / filteredData[0].TotalClicks * 100}%` }}></div>
                                                </div>
                                            </td>
                                            <td className=''>{eachData.AverageRetention}</td>
                                            <td className=''>{eachData.AverageRetention}</td>
                                            <td  >{eachData.Device == 'Desktop' ? <Computer /> : <PhoneAndroid />}</td>
                                            <td className='flex justify-center'><img src={HeatMapIMG} alt="HeatMap" className='w-5 h-5 ' /></td>


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
        </>
    )
}

export default HeatMap