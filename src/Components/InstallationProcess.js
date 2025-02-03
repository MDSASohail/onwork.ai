import { useRef } from "react";
import { CopyAll, ContentCopy, Settings } from '@mui/icons-material'
import VerticalLine from '../Images/Vertical Line.png'
import VerticalLineSmall from '../Images/Vertical Line samll.png'
const domain = [{ heading: "Camrony AFS", subHeading: "camrony.allfriends.studio.com" }, { heading: "Camrony 2nd domain", subHeading: "camproy.2ndcomain.com" }, { heading: "Camprony 3", subHeading: "3rd subheading" }]
function InstallationProcess() {
    const codeRef = useRef(null);

    const copyCode = () => {
        navigator.clipboard.writeText(codeRef.current.innerText);
        // console.log("Vlaue to copy is ", codeRef.current.innerText)
    }
    return (
        <>

            <div className=" lg:flex gap-3 justify-between my-6  ">
                {
                    domain.map((eachDomain, index) => <EachDomainDeesign key={index} heading={eachDomain.heading} subHeading={eachDomain.subHeading} />)
                }

            </div>
            <div className="p-8 my-6 border-black rounded-2xl bg-white">
                <div className="my-">
                    <h1 className=" relative">
                        <strong className="font-medium text-xl ml-4 ">Install the tag on your site to get access to all features, tools & insights you need.</strong>
                        <div className="absolute -top-1 left-0 w-14 h-8 border-t-4  border-borderColor border-l-4 rounded-tl-lg"></div>
                    </h1>
                    <div className="bg-[#eaf0ff] mt-4 rounded-2xl p-6 relative">
                        <h1 className="text-borderColor font-medium">Get started with the tag installation</h1>
                        <div>
                            <img src={VerticalLine} alt="" className="absolute top-24 left-9 h-64 " />

                        </div>

                        <div className="mt-5">
                            <div className="flex  items-center">
                                <div className="bg-borderColor  px-2 text-white rounded-lg">1</div>
                                <p className="ml-6">Copy this given code</p>
                            </div>
                            <div className="relative p-3 my-3 ml-12 rounded-lg border-2 border-borderColor max-w-[650px]">


                                <p className="wrap-text" ref={codeRef}>
                                    {`<script>
                                        (function (on, w , o, r, k, ai){ onwork = on.getElementsByTagName("head")[0];aijs = on.createElement(w);aijs.async=true;aijs.type=ai;aijs.                              charset='utf-8'; aijs.id = k;aijs.defer = true;aijs.async = false;aijs.src=o +'?token='+r;onwork.appendChild(aijs); })(document,                               "script", "https://script.onwork.ai/script/onworkai.js", "J3q6rtt6ky7A6di6s4G6cp6KNLn69rttdicp", "thisistheidforonworkTracker", "text/                              javascript")
                                         </script>`}
                                </p>

                                <div onClick={copyCode} className="absolute bottom-0 -right-7 lg:-right-10 cursor-pointer">
                                    <ContentCopy />
                                </div>







                            </div>

                            <div className="flex items-center relative">
                                <div className="bg-borderColor  px-2 text-white rounded-lg">2</div>

                                <div className=" absolute top-6 left-3  h-6 overflow-hidden">
                                    <img src={VerticalLine} alt="" className="  overflow-hidden  " />

                                </div>
                                <p className="ml-6">Paste the code into the <span className="text-borderColor">{`<head>`} </span> of every page where you want to track user behavior.</p>
                            </div>

                            <div className="flex items-center mt-6">
                                <div className="bg-borderColor  px-2 text-white rounded-lg">3</div>
                                <p className="ml-6">To make sure everything is ready, verify that your code was installed.</p>
                            </div>
                        </div>

                        <div className=" max-w-[750px] mt-10 w-full flex justify-end">
                            <button className="bg-white text-borderColor border-2 hover:bg-borderColor transition-colors hover:text-white border-borderColor p-2 rounded-xl">Verify Installation</button>
                            <button onClick={copyCode} className="bg-white ml-4 hover:bg-borderColor transition-colors hover:text-white text-borderColor border-2 border-borderColor p-2 rounded-xl">Copy Code</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}


function EachDomainDeesign({ heading, subHeading }) {
    return (
        <>
            <div className="p-4 lg:w-[400px] flex-grow w-full  bg-white  rounded-2xl border-2 border-borderColor my-3">
                <h1 className="text-2xl text-borderColor ">{heading}</h1>
                <p className="border-b-2 py-2 font-medium">{subHeading}</p>

                <div className="flex justify-between mt-4 items-center">
                    <button className="p-2 bg-[#e6e6e6] rounded-xl text-[#8d8d8d]">View dashboard</button>
                    <Settings />
                </div>
            </div>
        </>
    )
}

export default InstallationProcess;