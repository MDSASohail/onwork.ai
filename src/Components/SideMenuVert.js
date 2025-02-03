import { DashboardRounded, ChevronLeft, ChevronRight, Map, Pause, FileCopy, Logout, Radio, LinkedCamera, InsertChart, Rocket, Add, Create, ViewDay } from '@mui/icons-material';
import { useState } from 'react';
import SessionRecordingIMG from '../Images/Polygon 3.png'
//It holds all the btns and sub-btns of vertical menu
const allSideMenuVertBTNs = [{ icon: <DashboardRounded />, text: "Dashboard", itsSubData: [] }, { icon: <Map />, text: "Heatmap", itsSubData: [] }, { icon: <img src={SessionRecordingIMG} />, text: "Session Recording", itsSubData: [] }, { icon: <FileCopy />, text: "Projects", itsSubData: [{ icon: <FileCopy />, text: "Projects", canGoBack: true }, { icon: <Rocket />, text: "Manage Projects" }, { icon: <InsertChart />, text: "Manage Quota Limits" }, { icon: <Add />, text: "Add New projects" }] }, { icon: <Radio />, text: "Generate Reports", itsSubData: [{ icon: <Radio />, text: "Generate Reports", canGoBack: true }, { icon: <LinkedCamera />, text: "Bot Report" }, { icon: <Create />, text: "Create Custom Dashboard" }, { icon: <ViewDay />, text: "View Dashboard" }] }, { icon: <Logout />, text: "Logout", itsSubData: [] }]
function SideMenuVert() {

  const [verticalmenuBTns, setVerticalmenuBTns] = useState({ activeIndex: 0, menuItems: allSideMenuVertBTNs }) //Holds all the vertical menu btns. It is dynamic.
  const [subMenu, setSubmenu] = useState({ activeIndex: -1, menuItems: [] });
  console.log("SUb menu is ", subMenu)

  //Function to change vertival menu on clicking on it, if it has sub items.
  const changeVertMenuItems = (index) => {

    const selectedItem = verticalmenuBTns.menuItems[index];
    if (selectedItem.itsSubData?.length > 0) {
      console.log("Menu change", allSideMenuVertBTNs[index].itsSubData.length)
      
      setSubmenu({ activeIndex: -2, menuItems: selectedItem.itsSubData })
    }

    setVerticalmenuBTns(preState => ({ ...preState, activeIndex: index }))




  }


  const changeVertSubMenu = (index) => {
    console.log("Index", index);
    // if (index === -1) return;
    setSubmenu(preState => ({ ...preState, activeIndex: index }))
    
    
  }


  const handleChevronClick = (e) => {
    e.stopPropagation();
    setVerticalmenuBTns((prev) => ({ ...prev, activeIndex: 0 }));
    setSubmenu((prev) => ({ ...prev, activeIndex: -1 }));
  };
  




  return (
    <>
      <div className='flex '>
        <div className={`  w-full  flex-shrink-0  flex flex-col   items-center  text-[#9F9F9F] bg-white rounded-l-2xl  py-1 transition-transform duration-500 ${subMenu.activeIndex !== -1 ? "-translate-x-full" : "translate-x-0"}`}>
          {
            verticalmenuBTns.menuItems.map((eachBTn, index) => <button onClick={() => { changeVertMenuItems(index) }} key={index} className={`flex  flex-col justify-center items-center p-4 rounded-2xl my-1 hover:text-white hover:bg-[#081225] transition-colors w-[88%]   relative ${index === verticalmenuBTns.activeIndex ? "bg-[#081225] text-white" : ""}  ${eachBTn.canGoBack ? "cursor-default" : ""}`}>
              {eachBTn.icon}
              {
                eachBTn.itsSubData?.length > 0 ? <ChevronRight className="absolute right-0 top-4" /> : ""
              }


              <span className='mt-2 text-sm text-nowrap'>{eachBTn.text}</span>
            </button>)
          }
        </div>
        <div className={`w-full flex flex-col  flex-shrink-0    items-center  text-[#9F9F9F] bg-white rounded-r-2xl py-1 transition-transform duration-500 ${subMenu.activeIndex !== -1 ? "-translate-x-full" : "-translate-x-2"}`}>
          <div className={`flex  flex-col justify-center items-center p-4 rounded-2xl text-white font-bold my-1 bg-borderColor w-[88%]   relative  `}>
              
              <div className='duration-300  hover:bg-white hover:text-black cursor-pointer transition-colors absolute  rounded-2xl left-2 top-6 '>
              <ChevronLeft sx={{ width: 30, height: 30 }} onClick={handleChevronClick} className="" />
            
              </div>
              
            <span className='py-3 text-sm text-nowrap'>{subMenu?.menuItems[0]?.text}</span>
          </div>

          {


            subMenu?.menuItems.slice(1).map((eachBTn, index) => <button onClick={() => { changeVertSubMenu(index) }} key={index} className={`flex  flex-col justify-center items-center p-4 rounded-2xl my-1 hover:text-white hover:bg-[#081225] transition-colors w-[88%]   relative ${index === subMenu.activeIndex ? `bg-primaryBgColor text-white` : ""}  ${eachBTn.canGoBack ? "cursor-default" : ""}`}>
              {eachBTn.icon}
              <span className='mt-2 text-sm text-nowrap'>{eachBTn.text}</span>
            </button>)
          }
        </div>
      </div>
    </>
  )
}

export default SideMenuVert;