import HeaderFIrst from "../Components/HeaderFIrst";
import HeaderSecond from "../Components/HeaderSecond";
import SearchSection from "../Components/SearchSection";
import MarketStrategyNotification from "../Components/MarketStrategyNotification";
import SideMenuVert from "../Components/SideMenuVert";
import TotalDetailComponent from "../Components/TotalDetailComponent";
import EachFilter from "../Components/EachFilter";
import EachDetailSection from "../Components/EachDetailSection";
import JavaScriptError from "../Components/JavaScriptError";
import Map from '../Components/Map'
import PieChart from "../Components/PieChart";
import LatestUsers from "../Components/LatestUsers";
import AiConversationDiv from "../Components/AiConversationSection";
import { useEffect, useState } from "react";
import { getCookeiesValue, setCookies } from "../JSFunctions/JavaScriptFunction";
import Toast from "../Components/Toast";
import CompanyLogo from "../Components/CompanyLogo";
import TopMiddle from '../Components/TopMiddle'
import TopRightSettings from "../Components/TopRightSettings";
import Domain from "../Components/Domain";
import DateRange from "../Components/DateRange";
import GoodMorningUser from "../Components/GoodMorningUser";
import FilterSection from "./FilterSection";
import SecondIMG from '../Images/Frame 56.png'
import BarChart from "../Components/BarChart";
import { totalHighestAndMostReffer } from '../Components/BarChart'
import { ManageAccounts } from "@mui/icons-material";
import ManageProfile from "../Components/ManageProfile";
import InstallationProcess from "../Components/InstallationProcess";
import SessionRecording from "../Components/SessionRecording";
import HeatMap from "../Components/HeatMap";
import SessionRecordingInDetail from "../Components/SessionRecordingDetail";
import OrganizationSetting from "../Components/OrganizationSetting";
import CustomLineChart from "../Components/LineChard";
const filterValues = [{ criteria: "Country", operation: ":", value: "India, UAE" }, { criteria: "Range", operation: ">=", value: "50" }, { criteria: "Retention", operation: "<", value: "100" }, { criteria: "Country", operation: ":", value: "India, UAE" }, { criteria: "Reffer", value: "Google", operation: "!=" }, { criteria: "URL", value: "allfriends.com", operation: ":" }, { criteria: "Scroll", value: "50", operation: ">" }, { criteria: "Country", operation: ":", value: "India, UAE" }, { criteria: "URL", value: "allfriends.com", operation: ":" }, { criteria: "Range", operation: ">=", value: "50" }, { criteria: "Retention", operation: "<", value: "100" },]
// const filterValues = [{ criteria: "Country", operation: ":", value: "India, UAE" }, { criteria: "Range", operation: ">=", value: "50" }, { criteria: "Retention", operation: "<", value: "100" }, { criteria: "Country", operation: ":", value: "India, UAE" }, { criteria: "Reffer", value: "Google", operation: "!=" }, { criteria: "URL", value: "allfriends.com", operation: ":" }, { criteria: "Scroll", value: "50", operation: ">" }, { criteria: "Country", operation: ":", value: "India, UAE" }, { criteria: "URL", value: "allfriends.com", operation: ":" }, { criteria: "Range", operation: ">=", value: "50" }, { criteria: "Retention", operation: "<", value: "100" }, { criteria: "Reffer", value: "Google", operation: "!=" }, { criteria: "URL", value: "allfriends.com", operation: ":" }, { criteria: "Scroll", value: "50", operation: ">" }]

function Home() {
    const [isMarketingOn, setIsMarketingOn] = useState(false);
    const [showToast, setShowToast] = useState(false)
    const [isFilterOn, setisFilterOn] = useState(true)
    //It runs only one time after loading the page.
    useEffect(() => {
        if (!getCookeiesValue("name"))  // It check value present or not. Present means time remaining. If not show market component.
        {
            console.log(" Not found means marketing should be on")
            setIsMarketingOn(true)
        }
    }, [])


    return (
        <>



            
            {/* {showToast && <Toast message={"Marketing component hidden for next 24h "} />} */}
{/* {isMarketingOn && <div className="  ">
                <MarketStrategyNotification isMarketingOn={isMarketingOn} setIsMarketingOn={setIsMarketingOn} setShowToast={setShowToast} />
            </div>} */}
            <div className={`bg-primaryBgColor w-screen fixed  h-[44%]   `}>{/*This div is use to give backgroud color only */}</div>

            <div className={`bg-secondryBgColor flex gap-3 border-2 border-red-900  md:p-3 lg:p-6  overflow-hidden`}>
            

                <div className=" lg:w-[10%] md:w-[20%]">
                    <div className={`sticky    z-20 w-full `}   >
                        <div className=" ">
                            <CompanyLogo />
                        </div>
                        <div className="mb-4 ">
                            <Domain className="" />
                        </div>

                        <div className=" rounded-2xl overflow-hidden ">
                            <SideMenuVert className=" " />
                        </div>
                    </div>
                </div>

                <div className="lg:w-[88%] md:w-[78%]  relative ">
                    {/* This div is to only give bg color Its height depend upon the filter is on or not*/}
                    {/* <div className={`bg-primaryBgColor    fixed  w-full z-20   ${isFilterOn ? "h-[18%]" : "h-[14%]"}`}></div> */}

                    <div className={` realtive  h-14 py-2     bg-primaryBgColor `}>

                        {/* Only to give color */}
                        {/* <div className={`z-50 h-24 bg-primaryBgColor   top-0 w-full -translate-x-4 fixed ${isMarketingOn ? "top-6" : "top-0"}`}></div> */}

                        <div className={`fixed border- w-screen left-0 flex justify-center   z-[100]   `} >

                            <TopMiddle />

                        </div>


                        <div className={`  justify-end sm:hidden lg:flex border-white  `}>
                           
                            <TopRightSettings />
                            

                        </div>

                    </div>

                    <div className={`absolute z-30 top-[122px]`}>
                        <GoodMorningUser />
                    </div>

                    <div className={` z-[60] sticky mt-16    flex justify-end top-11 `}>
                        <DateRange />
                    </div>

                    <div className="mt-5 removeBorder border-blue-900">
                        <TotalDetailComponent />
                    </div>

                    <div className={`sticky mt-3 bg-primaryBgColor removeBorder border-yellow-800    py-1 z-20  ${isMarketingOn ? "top-[120px]" : "top-[95px]"}`}>
                        <SearchSection setisFilterOn={setisFilterOn} />
                    </div>

                    {/* All other UI will be in this div */}
                    {/* ${isFilterOn ? "translate-y-0" : " -translate-y-32"} */}
                    <div className={`  mt-5  py-1 transition-transform  `}>



                        {/* ${isFilterOn ? "opacity-100 " : "opacity-0 pointer-events-none"} */}
                        <div className={` z-[100] hidden  pb-1 border-red-800 sticky transition-opacity duration-300 ${isFilterOn ? "opacity-100 " : "opacity-100 pointer-events-none"}  ${isMarketingOn ? "top-1 " : "top-[21%] "}`}>
                            <FilterSection filters={filterValues} onClearFilters={() => { }} />
                        </div>
                          
                          {/* Chat Lines */}
                        <CustomLineChart/>

                        <div className="flex    removeBorder border-green-900 flex-wrap gap-3 justify-center lg:justify-between">
                            <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />
                            <EachDetailSection MiddleComponent={BarChart} data={totalHighestAndMostReffer} heading={"Refferer"} />
                             <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />
                        </div>

                        <div className="" >
                            <LatestUsers />
                        </div>
                        
                        {/* <SessionRecordingInDetail/> */}
                        <div className="">
                            <HeatMap />
                        </div>



                        


                        <OrganizationSetting/>
                        <ManageProfile/>
                        <InstallationProcess/>
                        <SessionRecording/>

                        

                       

                        <div className="flex   flex-wrap gap-3   border-red-950 justify-center lg:justify-between">

                            <EachDetailSection MiddleComponent={Map} data={[{ text: "Total clicks", value: "100 clicks" }, { text: 'Avg click per page', value: "5 clicks" }, { text: "Avg scroll", value: "60%" }]} heading={"Heatmap"} />
                            <EachDetailSection MiddleComponent={JavaScriptError} data={[{ text: "Total Error", value: "18" }, { text: "Total Logs", value: "12" }, { text: 'Total Warning', value: "04" }]} heading={"JavaScript Error"} />
                            <EachDetailSection MiddleComponent={BarChart} data={totalHighestAndMostReffer} heading={"Refferer"} />
                        </div>

                        <div className="flex   flex-wrap gap-3   border-red-950 justify-center lg:justify-between">
                            <EachDetailSection MiddleComponent={Map} data={[{ text: "Total clicks", value: "100 clicks" }, { text: 'Avg click per page', value: "5 clicks" }, { text: "Avg scroll", value: "60%" }]} heading={"Heatmap"} />
                            <EachDetailSection MiddleComponent={JavaScriptError} data={[{ text: "Total Error", value: "18" }, { text: "Total Logs", value: "12" }, { text: 'Total Warning', value: "04" }]} heading={"JavaScript Error"} />
                            <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />
                           

                        </div>

                        <div className="flex   flex-wrap gap-3   border-red-950 justify-center lg:justify-between">
                            <EachDetailSection MiddleComponent={BarChart} data={totalHighestAndMostReffer} heading={"Refferer"} />
                            <EachDetailSection MiddleComponent={JavaScriptError} data={[{ text: "Total Error", value: "18" }, { text: "Total Logs", value: "12" }, { text: 'Total Warning', value: "04" }]} heading={"JavaScript Error"} />
                            <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />

                        </div>

                        <div className="flex   flex-wrap gap-3   border-red-950 justify-center lg:justify-between">
                            <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />
                            <EachDetailSection MiddleComponent={Map} data={[{ text: "Total clicks", value: "100 clicks" }, { text: 'Avg click per page', value: "5 clicks" }, { text: "Avg scroll", value: "60%" }]} heading={"Heatmap"} />
                            <EachDetailSection MiddleComponent={BarChart} data={totalHighestAndMostReffer} heading={"Refferer"} />

                        </div>
                        
                        <div className="flex   flex-wrap gap-3   border-red-950 justify-center lg:justify-between">
                            <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />
                            <EachDetailSection MiddleComponent={Map} data={[{ text: "Total clicks", value: "100 clicks" }, { text: 'Avg click per page', value: "5 clicks" }, { text: "Avg scroll", value: "60%" }]} heading={"Heatmap"} />
                            <EachDetailSection MiddleComponent={JavaScriptError} data={[{ text: "Total Error", value: "18" }, { text: "Total Logs", value: "12" }, { text: 'Total Warning', value: "04" }]} heading={"JavaScript Error"} />

                        </div>

                    </div>
                </div>
            </div>













        </>
    )
}


export default Home;import HeaderFIrst from "../Components/HeaderFIrst";
import HeaderSecond from "../Components/HeaderSecond";
import SearchSection from "../Components/SearchSection";
import MarketStrategyNotification from "../Components/MarketStrategyNotification";
import SideMenuVert from "../Components/SideMenuVert";
import TotalDetailComponent from "../Components/TotalDetailComponent";
import EachFilter from "../Components/EachFilter";
import EachDetailSection from "../Components/EachDetailSection";
import JavaScriptError from "../Components/JavaScriptError";
import Map from '../Components/Map'
import PieChart from "../Components/PieChart";
import LatestUsers from "../Components/LatestUsers";
import AiConversationDiv from "../Components/AiConversationSection";
import { useEffect, useState } from "react";
import { getCookeiesValue, setCookies } from "../JSFunctions/JavaScriptFunction";
import Toast from "../Components/Toast";
import CompanyLogo from "../Components/CompanyLogo";
import TopMiddle from '../Components/TopMiddle'
import TopRightSettings from "../Components/TopRightSettings";
import Domain from "../Components/Domain";
import DateRange from "../Components/DateRange";
import GoodMorningUser from "../Components/GoodMorningUser";
import FilterSection from "./FilterSection";
import SecondIMG from '../Images/Frame 56.png'
import BarChart from "../Components/BarChart";
import { totalHighestAndMostReffer } from '../Components/BarChart'
import { ManageAccounts } from "@mui/icons-material";
import ManageProfile from "../Components/ManageProfile";
import InstallationProcess from "../Components/InstallationProcess";
import SessionRecording from "../Components/SessionRecording";
import HeatMap from "../Components/HeatMap";
import SessionRecordingInDetail from "../Components/SessionRecordingDetail";
import OrganizationSetting from "../Components/OrganizationSetting";
import CustomLineChart from "../Components/LineChard";
const filterValues = [{ criteria: "Country", operation: ":", value: "India, UAE" }, { criteria: "Range", operation: ">=", value: "50" }, { criteria: "Retention", operation: "<", value: "100" }, { criteria: "Country", operation: ":", value: "India, UAE" }, { criteria: "Reffer", value: "Google", operation: "!=" }, { criteria: "URL", value: "allfriends.com", operation: ":" }, { criteria: "Scroll", value: "50", operation: ">" }, { criteria: "Country", operation: ":", value: "India, UAE" }, { criteria: "URL", value: "allfriends.com", operation: ":" }, { criteria: "Range", operation: ">=", value: "50" }, { criteria: "Retention", operation: "<", value: "100" },]
// const filterValues = [{ criteria: "Country", operation: ":", value: "India, UAE" }, { criteria: "Range", operation: ">=", value: "50" }, { criteria: "Retention", operation: "<", value: "100" }, { criteria: "Country", operation: ":", value: "India, UAE" }, { criteria: "Reffer", value: "Google", operation: "!=" }, { criteria: "URL", value: "allfriends.com", operation: ":" }, { criteria: "Scroll", value: "50", operation: ">" }, { criteria: "Country", operation: ":", value: "India, UAE" }, { criteria: "URL", value: "allfriends.com", operation: ":" }, { criteria: "Range", operation: ">=", value: "50" }, { criteria: "Retention", operation: "<", value: "100" }, { criteria: "Reffer", value: "Google", operation: "!=" }, { criteria: "URL", value: "allfriends.com", operation: ":" }, { criteria: "Scroll", value: "50", operation: ">" }]

function Home() {
    const [isMarketingOn, setIsMarketingOn] = useState(false);
    const [showToast, setShowToast] = useState(false)
    const [isFilterOn, setisFilterOn] = useState(true)
    //It runs only one time after loading the page.
    useEffect(() => {
        if (!getCookeiesValue("name"))  // It check value present or not. Present means time remaining. If not show market component.
        {
            console.log(" Not found means marketing should be on")
            setIsMarketingOn(true)
        }
    }, [])


    return (
        <>



            
            {/* {showToast && <Toast message={"Marketing component hidden for next 24h "} />} */}
{/* {isMarketingOn && <div className="  ">
                <MarketStrategyNotification isMarketingOn={isMarketingOn} setIsMarketingOn={setIsMarketingOn} setShowToast={setShowToast} />
            </div>} */}
            <div className={`bg-primaryBgColor w-screen fixed  h-[44%]   `}>{/*This div is use to give backgroud color only */}</div>

            <div className={`bg-secondryBgColor flex gap-3 border-2 border-red-900  md:p-3 lg:p-6  overflow-hidden`}>
            

                <div className=" lg:w-[10%] md:w-[20%]">
                    <div className={`sticky    z-20 w-full `}   >
                        <div className=" ">
                            <CompanyLogo />
                        </div>
                        <div className="mb-4 ">
                            <Domain className="" />
                        </div>

                        <div className=" rounded-2xl overflow-hidden ">
                            <SideMenuVert className=" " />
                        </div>
                    </div>
                </div>

                <div className="lg:w-[88%] md:w-[78%]  relative ">
                    {/* This div is to only give bg color Its height depend upon the filter is on or not*/}
                    {/* <div className={`bg-primaryBgColor    fixed  w-full z-20   ${isFilterOn ? "h-[18%]" : "h-[14%]"}`}></div> */}

                    <div className={` realtive  h-14 py-2     bg-primaryBgColor `}>

                        {/* Only to give color */}
                        {/* <div className={`z-50 h-24 bg-primaryBgColor   top-0 w-full -translate-x-4 fixed ${isMarketingOn ? "top-6" : "top-0"}`}></div> */}

                        <div className={`fixed border- w-screen left-0 flex justify-center   z-[100]   `} >

                            <TopMiddle />

                        </div>


                        <div className={`  justify-end sm:hidden lg:flex border-white  `}>
                           
                            <TopRightSettings />
                            

                        </div>

                    </div>

                    <div className={`absolute z-30 top-[122px]`}>
                        <GoodMorningUser />
                    </div>

                    <div className={` z-[60] sticky mt-16    flex justify-end top-11 `}>
                        <DateRange />
                    </div>

                    <div className="mt-5 removeBorder border-blue-900">
                        <TotalDetailComponent />
                    </div>

                    <div className={`sticky mt-3 bg-primaryBgColor removeBorder border-yellow-800    py-1 z-20  ${isMarketingOn ? "top-[120px]" : "top-[95px]"}`}>
                        <SearchSection setisFilterOn={setisFilterOn} />
                    </div>

                    {/* All other UI will be in this div */}
                    {/* ${isFilterOn ? "translate-y-0" : " -translate-y-32"} */}
                    <div className={`  mt-5  py-1 transition-transform  `}>



                        {/* ${isFilterOn ? "opacity-100 " : "opacity-0 pointer-events-none"} */}
                        <div className={` z-[100] hidden  pb-1 border-red-800 sticky transition-opacity duration-300 ${isFilterOn ? "opacity-100 " : "opacity-100 pointer-events-none"}  ${isMarketingOn ? "top-1 " : "top-[21%] "}`}>
                            <FilterSection filters={filterValues} onClearFilters={() => { }} />
                        </div>
                          
                          {/* Chat Lines */}
                        <CustomLineChart/>

                        <div className="flex    removeBorder border-green-900 flex-wrap gap-3 justify-center lg:justify-between">
                            <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />
                            <EachDetailSection MiddleComponent={BarChart} data={totalHighestAndMostReffer} heading={"Refferer"} />
                             <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />
                        </div>

                        <div className="" >
                            <LatestUsers />
                        </div>
                        
                        {/* <SessionRecordingInDetail/> */}
                        <div className="">
                            <HeatMap />
                        </div>



                        


                        <OrganizationSetting/>
                        <ManageProfile/>
                        <InstallationProcess/>
                        <SessionRecording/>

                        

                       

                        <div className="flex   flex-wrap gap-3   border-red-950 justify-center lg:justify-between">

                            <EachDetailSection MiddleComponent={Map} data={[{ text: "Total clicks", value: "100 clicks" }, { text: 'Avg click per page', value: "5 clicks" }, { text: "Avg scroll", value: "60%" }]} heading={"Heatmap"} />
                            <EachDetailSection MiddleComponent={JavaScriptError} data={[{ text: "Total Error", value: "18" }, { text: "Total Logs", value: "12" }, { text: 'Total Warning', value: "04" }]} heading={"JavaScript Error"} />
                            <EachDetailSection MiddleComponent={BarChart} data={totalHighestAndMostReffer} heading={"Refferer"} />
                        </div>

                        <div className="flex   flex-wrap gap-3   border-red-950 justify-center lg:justify-between">
                            <EachDetailSection MiddleComponent={Map} data={[{ text: "Total clicks", value: "100 clicks" }, { text: 'Avg click per page', value: "5 clicks" }, { text: "Avg scroll", value: "60%" }]} heading={"Heatmap"} />
                            <EachDetailSection MiddleComponent={JavaScriptError} data={[{ text: "Total Error", value: "18" }, { text: "Total Logs", value: "12" }, { text: 'Total Warning', value: "04" }]} heading={"JavaScript Error"} />
                            <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />
                           

                        </div>

                        <div className="flex   flex-wrap gap-3   border-red-950 justify-center lg:justify-between">
                            <EachDetailSection MiddleComponent={BarChart} data={totalHighestAndMostReffer} heading={"Refferer"} />
                            <EachDetailSection MiddleComponent={JavaScriptError} data={[{ text: "Total Error", value: "18" }, { text: "Total Logs", value: "12" }, { text: 'Total Warning', value: "04" }]} heading={"JavaScript Error"} />
                            <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />

                        </div>

                        <div className="flex   flex-wrap gap-3   border-red-950 justify-center lg:justify-between">
                            <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />
                            <EachDetailSection MiddleComponent={Map} data={[{ text: "Total clicks", value: "100 clicks" }, { text: 'Avg click per page', value: "5 clicks" }, { text: "Avg scroll", value: "60%" }]} heading={"Heatmap"} />
                            <EachDetailSection MiddleComponent={BarChart} data={totalHighestAndMostReffer} heading={"Refferer"} />

                        </div>
                        
                        <div className="flex   flex-wrap gap-3   border-red-950 justify-center lg:justify-between">
                            <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />
                            <EachDetailSection MiddleComponent={Map} data={[{ text: "Total clicks", value: "100 clicks" }, { text: 'Avg click per page', value: "5 clicks" }, { text: "Avg scroll", value: "60%" }]} heading={"Heatmap"} />
                            <EachDetailSection MiddleComponent={JavaScriptError} data={[{ text: "Total Error", value: "18" }, { text: "Total Logs", value: "12" }, { text: 'Total Warning', value: "04" }]} heading={"JavaScript Error"} />

                        </div>

                    </div>
                </div>
            </div>













        </>
    )
}


export default Home;