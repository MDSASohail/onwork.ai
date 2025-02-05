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
import { useEffect, useState, useRef } from "react";
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

    const divRef = useRef(null);
    const [distance, setDistance] = useState(0);
    //It runs only one time after loading the page.
    useEffect(() => {
        if (!getCookeiesValue("name"))  // It check value present or not. Present means time remaining. If not show market component.
        {
            setIsMarketingOn(true)
        }
    }, [])


    // Used to calculate the distance of  from top of the viewport to determine the sticky position
    useEffect(() => {
        const updateDistance = () => {
            if (divRef.current) {
                // Calculate distance from the top of the document
                let offset = divRef.current.offsetTop;
                let parent = divRef.current.offsetParent;
                // console.log("Height", offset, parent.offsetTop)
                while (parent) {
                    offset += parent.offsetTop;
                    parent = parent.offsetParent;
                    // console.log("Height", offset, parent)
                }

                setDistance(offset);
            }
        };

        updateDistance();

        // Optional: Update on scroll
        // window.addEventListener("scroll", updateDistance);
        // return () => window.removeEventListener("scroll", updateDistance);
    }, []);

    // console.log("Distance is ", distance)


    return (
        <>




            {/* {showToast && <Toast message={"Marketing component hidden for next 24h "} />} */}
            {/* {isMarketingOn && <div className="  ">
                <MarketStrategyNotification isMarketingOn={isMarketingOn} setIsMarketingOn={setIsMarketingOn} setShowToast={setShowToast} />
            </div>} */}
            <div className={`bg-primaryBgColor w-screen fixed  h-[34%]  md:h-[39%] xl:h-[41%] 2xl:h-[37%] `}>{/*This div is use to give backgroud color only. I can ditermine its height by distance variable*/}</div>
            <div style={{ height: `${distance -50}px`, }} className={`bg-primaryBgColor  top-0   fixed  w-full z-20  `}>{/*This div height spread from top to till the top of vertical menu. Width 100% */}</div>
            <div className={`bg-secondryBgColor  gap-3 border-2   md:p-3 lg:p-6  `}>




                <div className="sticky   md:top-3 lg:top-6 flex justify-center xl:gap-8 gap-4 xl:mx-4 z-50 ">
                    <div className=" max-w-[150px] absolute  -top-8 left-0"><CompanyLogo /></div>
                    <TopMiddle />

                </div>

                <div className="absolute md:top-3 lg:top-6 md:right-3 lg:right-10 right-0 z-[60]"><TopRightSettings /></div>




                <div className=" sticky md:top-3 lg:top-6 flex xl:gap-8 gap-4  justify-end my-3 mt-8 xl:mx-4 z-30">
                    <div><DateRange text={"Date Range"} /></div>
                </div>


                {/* This div's width is 100%. It contain side vertical menu and rest UI */}

                <div ref={divRef} className="flex xl:gap-8 gap-4 xl:mx-4 mt-4 relative">


                    <div style={{ top: `${distance - 55}px ` }} className="fixed max-w-[150px] z-[60]  "><Domain /></div>
                    <div style={{ top: `${distance}px` }} className={`sticky rounded-2xl overflow-hidden h-4/5  md:w-[20%]  max-w-[150px] `}>
                        <SideMenuVert className="sticky top-0" />
                    </div>
                    <div className=" md:w-[78%]   relative flex-grow ">





                        <div className=" removeBorder border-blue-900">
                            <div className="absolute -top-[52px] left-2 z-[60]"><GoodMorningUser /></div>
                            <TotalDetailComponent />
                        </div>

                        <div style={{ top: `${distance - 65}px` }} className={`sticky mt-3 bg-primaryBgColor    p-1 z-20`}>
                            <SearchSection setisFilterOn={setisFilterOn} />
                        </div>

                        {/* All other UI will be in this div */}
                        {/* ${isFilterOn ? "translate-y-0" : " -translate-y-32"} */}
                        <div className={`  mt-5  py-1 transition-transform  `}>



                            {/* ${isFilterOn ? "opacity-100 " : "opacity-0 pointer-events-none"} */}
                            <div className={` z-[100] hidden  pb-1 sticky transition-opacity duration-300 ${isFilterOn ? "opacity-100 " : "opacity-100 pointer-events-none"}  ${isMarketingOn ? "top-1 " : "top-[21%] "}`}>
                                <FilterSection filters={filterValues} onClearFilters={() => { }} />
                            </div>

                            {/* Chat Lines */}
                            <CustomLineChart />

                            <div className="flex    removeBorder border-green-900 flex-wrap xl:gap-8 gap-4  justify-center lg:justify-between my-7">
                                <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />
                                <EachDetailSection MiddleComponent={BarChart} data={totalHighestAndMostReffer} heading={"Refferer"} />
                                <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />
                            </div>

                            <div className="" >
                                <LatestUsers />
                            </div>






                            <div className="flex   flex-wrap xl:gap-8 gap-4    justify-center lg:justify-between my-7">

                                <EachDetailSection MiddleComponent={Map} data={[{ text: "Total clicks", value: "100 clicks" }, { text: 'Avg click per page', value: "5 clicks" }, { text: "Avg scroll", value: "60%" }]} heading={"Heatmap"} />
                                <EachDetailSection MiddleComponent={JavaScriptError} data={[{ text: "Total Error", value: "18" }, { text: "Total Logs", value: "12" }, { text: 'Total Warning', value: "04" }]} heading={"JavaScript Error"} />
                                <EachDetailSection MiddleComponent={BarChart} data={totalHighestAndMostReffer} heading={"Refferer"} />
                                <EachDetailSection MiddleComponent={Map} data={[{ text: "Total clicks", value: "100 clicks" }, { text: 'Avg click per page', value: "5 clicks" }, { text: "Avg scroll", value: "60%" }]} heading={"Heatmap"} />
                                <EachDetailSection MiddleComponent={JavaScriptError} data={[{ text: "Total Error", value: "18" }, { text: "Total Logs", value: "12" }, { text: 'Total Warning', value: "04" }]} heading={"JavaScript Error"} />
                                <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />
                                <EachDetailSection MiddleComponent={BarChart} data={totalHighestAndMostReffer} heading={"Refferer"} />
                                <EachDetailSection MiddleComponent={JavaScriptError} data={[{ text: "Total Error", value: "18" }, { text: "Total Logs", value: "12" }, { text: 'Total Warning', value: "04" }]} heading={"JavaScript Error"} />
                                <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />
                                <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />
                                <EachDetailSection MiddleComponent={Map} data={[{ text: "Total clicks", value: "100 clicks" }, { text: 'Avg click per page', value: "5 clicks" }, { text: "Avg scroll", value: "60%" }]} heading={"Heatmap"} />
                                <EachDetailSection MiddleComponent={BarChart} data={totalHighestAndMostReffer} heading={"Refferer"} />
                                <EachDetailSection MiddleComponent={PieChart} data={[{ text: "Chrome", value: "80%" }, { text: "Mobile Safari", value: "50%" }, { text: "Others", value: "70%" }]} heading={"Browser"} />
                                <EachDetailSection MiddleComponent={Map} data={[{ text: "Total clicks", value: "100 clicks" }, { text: 'Avg click per page', value: "5 clicks" }, { text: "Avg scroll", value: "60%" }]} heading={"Heatmap"} />
                                <EachDetailSection MiddleComponent={JavaScriptError} data={[{ text: "Total Error", value: "18" }, { text: "Total Logs", value: "12" }, { text: 'Total Warning', value: "04" }]} heading={"JavaScript Error"} />

                            </div>


                            <HeatMap />







                            <OrganizationSetting />
                            <ManageProfile />
                            <InstallationProcess />
                            <SessionRecording />
                            <SessionRecordingInDetail />




                        </div>
                    </div>

                </div>
            </div>













        </>
    )
}


export default Home;