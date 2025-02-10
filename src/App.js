
import './App.css';
import { useEffect } from 'react'
import SectionFirst from './Components/MarketStrategyNotification';
import SearchSection from './Components/SearchSection';
import TotalDetailComponent from './Components/TotalDetailComponent';
import Domain from './Components/Domain';
import HeaderSecond from './Components/HeaderSecond';
import HeaderFIrst from './Components/HeaderFIrst';
import EachFilter from './Components/EachFilter';
import LatestUsers from './Components/LatestUsers';
import JavaScriptError from './Components/JavaScriptError';
import EachDetailSection from './Components/EachDetailSection';
import PieChart from './Components/PieChart';
import Map from './Components/Map'
import ProfileDetail from './Components/ProfileDetail';
import AiConversationDiv from './Components/AiConversationSection';
import SideMenuVert from './Components/SideMenuVert';
import Home from './Pages/Home';
import BarChart from './Components/BarChart';
import { getCooketValue, setCookies, getRemainingTimeOfACookie } from './JSFunctions/JavaScriptFunction';
import Toast from './Components/Toast';
import Login from './Components/Login';
import ManageProfile from './Components/ManageProfile';
import InstallationProcess from './Components/InstallationProcess';
import SessionRecording from './Components/SessionRecording';
import Responsive from './Components/ResponsiveTest';
import HeatMaps from './Components/HeatMap';
import HeatMap from './Components/HeatMap';
import SessionRecordingInDetail from './Components/SessionRecordingDetail';
import OrganizationSetting from './Components/OrganizationSetting';
import LineChart from './Components/LineChard';
import HeatmapColor from './Components/HeatMapColor';
const filterValues = [{ criteria: "Country", operation: ":", value: "India, UAE" }, { criteria: "Range", operation: ">=", value: "50" }, { criteria: "Retention", operation: "<", value: "100" }, { criteria: "Country", operation: ":", value: "India, UAE" }, { criteria: "Reffer", value: "Google", operation: "!=" }, { criteria: "URL", value: "allfriends.com", operation: ":" }, { criteria: "Scroll", value: "50", operation: ">" }, { criteria: "Country", operation: ":", value: "India, UAE" }, { criteria: "URL", value: "allfriends.com", operation: ":" }, { criteria: "Range", operation: ">=", value: "50" }, { criteria: "Retention", operation: "<", value: "100" }, { criteria: "Reffer", value: "Google", operation: "!=" }, { criteria: "URL", value: "allfriends.com", operation: ":" }, { criteria: "Scroll", value: "50", operation: ">" }]
const dataForBarChart = [
  { name: "google.com", views: 100 },
  { name: "bing.com", views: 90 },
  { name: "yandex.ru", views: 80 },
  { name: "facebook.com", views: 70 },
  { name: "instagram.com", views: 60 },
];
function App() {
  
  //Initializing MaterializeCSS
  //  useEffect(()=>{
  //          M.AutoInit()
  //  },[])

  useEffect(() => {
    //     setCookies('names',"Sohail Ansaris",24);
    //  console.log( getCooketValue("names")) 


  }, [])



  return (
    <div className="  ">

      {/* <div>
        <h1>Website Views</h1>
        <BarChart data={dataForBarChart} />
      </div> */}

      {/* <EachDetailSection MiddleComponent={BarChart} data={[{text:"Total Reffers", value:"80"},{text:"Highest Reffer", value:"Google"},{text:"Most Reffered Page", value:"/home"}]} heading={"Reffer"}/> */}
      {/* <SectionFirst/> */}
      {/* <HeaderFIrst/> */}
      {/* <HeaderSecond/>
      <SearchSection/>
      <TotalDetailComponent/> */}

      {/* <Domain/> */}



      {/* Filter Section */}
      {/* <div className='border-2  border-red-600 flex flex-wrap justify-evenly bg-white rounded-lg'>
        {filterValues.map((eachFilter, index) => <EachFilter key={index} value={eachFilter.value} operation={eachFilter.operation} criteria={eachFilter.criteria}/>)}
        
         <button className='px-3 py-3 border-2 rounded-2xl'>Clear All Filters</button>

      </div> */}

      {/* <LatestUsers/> */}
      {/* <JavaScriptError/> */}
      {/* <Map/> */}
      {/* <PieChart/> */}
      {/* <EachDetailSection MiddleComponent={Map} data={[{text:"Total clicks", value:"100Clicks"},{text:'Avg click per page', value:"5 clicks"},{text:"Avg scroll", value:"60%"}]} heading={"Heat Map"}/>
      <EachDetailSection MiddleComponent={JavaScriptError} data={[{text:"Total Error", value:"18"},{text:"Total Logs", value:"12"},{text:'Total Warning', value:"04"}]} heading={"JavaScript Error"}/>
      <EachDetailSection MiddleComponent={PieChart} data={[{text:"Chrome", value:"80%"},{text:"Mobile Safari", value:"50%"},{text:"Others", value:"70%"}]} heading={"Browser"}/>
       */}

      {/* <ProfileDetail/> */}

      {/* <AiConversationDiv/> */}
      {/* <SideMenuVert/> */}
      <Home/>
      {/* <Toast message={"Hello Sohail"}/> */}
      {/* <Login/> */}
      {/* <ManageProfile/> */}
      {/* <InstallationProcess/> */}
      {/* <SessionRecording/> */}
      {/* <Responsive/> */}
      {/* <HeatMap/> */}
      {/* <SessionRecordingInDetail/> */}
      {/* <OrganizationSetting/> */}
      {/* <LineChart/> */}
      {/* <HeatmapColor/> */}
    </div>
  );
}

export default App;
