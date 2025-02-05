import { Close, ContentCopy, Filter, FilterList, Help, NearMe, Pause, QuestionMark, SkipNext, SkipPrevious, Star, Start, Timer } from "@mui/icons-material";
import OpenInNewTab from '../Images/Open In new Tab.png'
import SessionRecordingIMG from '../Images/Sessioin Recording.png'
import { useState } from "react";
import CopiedMSG from "./CopiedMSG";
function SessionRecordingInDetail() {
    const [showinfoAndCopyMSG, setShowInfoAndCopyMSG] = useState({ info: -1, copyMSG: false })

    // const [displayCopyMSG, setDisplayCopyMSG] = useState({ clickedOnIcon: false, clickedOnText: false });


    const copyURL = () => {
        // console.log(" clicked", icon)
        navigator.clipboard.writeText("https://onwork.ai/pricing/");
        // console.log("Vlaue to copy is ", codeRef.current.innerText);
        // if (icon) {
        //     setDisplayCopyMSG((preValue) => ({ ...preValue, clickedOnIcon: true }));

        //     setTimeout(() => {
        //         setDisplayCopyMSG((preValue) => ({ ...preValue, clickedOnIcon: false }));
        //     }, 1000)
        // } else {
        //     setDisplayCopyMSG((preValue) => ({ ...preValue, clickedOnText: true }));
        //        console.log("Text clicked")
        //     setTimeout(() => {
        //         setDisplayCopyMSG((preValue) => ({ ...preValue, clickedOnText: false }));
        //     }, 1000)
        // }

        setShowInfoAndCopyMSG((preValue) => ({ ...preValue, copyMSG: true }));

        setTimeout(() => {
            setShowInfoAndCopyMSG((preValue) => ({ ...preValue, copyMSG: false }));
        }, 1000)

    }
    return (
        <>


            <div className="border-2 flex gap-3 p-3 bg-white rounded-xl overflow-hidden my-10 ">
                <div className="  text-textLightColor bg-[#EFF4FF] p-2  rounded-xl ">
                    <div className="flex items-center justify-between border-b-2 pb-2 mb-4">
                        <div className="">
                            <SkipPrevious className="text-borderColor" />
                            <span className="text-black mx-2 font-medium">Recording 768545</span>
                            <SkipNext className="text-borderColor" />
                        </div>

                        <Close />

                    </div>

                    <div className="h-[85vh] overflow-y-scroll styleScrollbar ">
                        {Array.from({ length: 10 }).map((eachdata, index) => <div key={index} className="bg-white my-2 relative  hover:shadow-md transition-colors shadow-borderColor hover:border-borderColor border-2  rounded-xl p-3 ">


                            <div className="flex item-center justify-between border-b-2 mb-2 pb-1">
                                <span className="text-borderColor" >Recording 54678924</span>
                                <hr />
                                <div className="flex items-center gap-3 ">
                                    <Pause className="text-red-600 cursor-pointer" />

                                    <a href="https://google.com" target="blank"> <img src={OpenInNewTab} className="w-5 cursor-pointer" alt="" /></a>
                                </div>

                            </div>

                            <div className="flex gap-6 ">
                                <span>19 Dec, 05.00pm</span>
                                <div className="flex-grow flex items-center gap-2">
                                    <Timer />
                                    <span >08sec</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center  ">
                                <span>6 clicks(19.26%)</span>
                                <div className="relative overflow-x-visible " onMouseLeave={() => setShowInfoAndCopyMSG((preValue) => ({ ...preValue, info: -1 }))}>
                                    <button onClick={() => setShowInfoAndCopyMSG((preValue) => ({ ...preValue, info: index }))} className="bg-borderColor px-6 py-2 rounded-xl text-white cursor-pointer" >Info</button>

                                    <div className={`absolute border-2 border-borderColor p-3 w-72 bg-white rounded-xl left-[22%] top-10 z-50  ${index === showinfoAndCopyMSG.info ? "block" : "hidden"}`}>
                                        <h1 className="text-black flex justify-between ">Returning User</h1>
                                        <p className="text-black  flex justify-between "> <strong>Date : </strong>  <span className="text-textLightColor">19Dec</span></p>
                                        <p className="text-black flex justify-between "> <strong>Duration : </strong>  <span className="text-textLightColor">12:08 sec</span></p>
                                        <p className="text-black flex justify-between "> <strong>Location : </strong>  <span className="text-textLightColor">India</span></p>
                                        <p className="text-black flex justify-between "> <strong>Device : </strong>  <span className="text-textLightColor">Desktop</span></p>
                                        <p className="text-black flex justify-between "> <strong>Browser : </strong>  <span className="text-textLightColor">Chrome</span></p>

                                        <button className="bg-[#E8E2FF] w-full text-borderColor text-center my-3 py-2 rounded-xl">Show All Properties</button>
                                    </div>

                                </div>

                            </div>

                        </div>)}
                    </div>



                </div>

                <div className=" flex-grow border-2 ">
                    <div className="flex items-center justify-between border-2 border-borderColor px-3 py-2 rounded-xl w-80 ">
                        <span className="font-medium" >https://onwork.ai/pricing/</span>
                        <div className="flex gap-3 items-center relative">
                            <div className={`absolute -top-14 right-4 transition-colors ${showinfoAndCopyMSG.copyMSG ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                <CopiedMSG />
                            </div>
                            <div className="cursor-pointer " onClick={copyURL}>
                                <ContentCopy />


                            </div>

                            <a href="https://google.com" target="blank"> <img src={OpenInNewTab} className="w-5 cursor-pointer" alt="" /></a>
                        </div>


                    </div>

                    <div className="my-2">
                        <img src={SessionRecordingIMG} alt="" className="w-full h-auto" />
                    </div>

                </div>

                <div className=" w-[22%]   ">

                    <div className="flex justify-end mb-2">
                        <div className="flex justify-end gap-3 rounded-xl px-3 py-2 border-2 border-borderColor text-borderColor w-24">
                            <Star />
                            <Help className="text-black " />
                        </div>
                    </div>
                    <div className=" w-full bg-[#EFF4FF] p-3 rounded-xl ">
                        <div className="flex justify-between items-center ">
                            <span>Actions</span>
                            <FilterList className="text-white  rounded-full bg-borderColor" style={{ fontSize: 40, padding: 4 }} />
                        </div>
                        {
                            Array.from({ length: 8 }).map((eachData, index) => <div key={index} className=" p-2 bg-white flex items-center my-2 ">
                                <NearMe />
                                <span className="text-sm mx-1">Clicked - #onwork_user</span>
                                <span>00.26</span>

                            </div>)
                        }
                    </div>

                </div>

            </div>
        </>
    )
}

export default SessionRecordingInDetail;