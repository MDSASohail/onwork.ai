import ChatBGImg from '../Images/AiChatBgImg.png'
import GeminiIMG from '../Images/GeminiIcon.png'
import SearchSection from './SearchSection'
import { Send, Message } from '@mui/icons-material'
import AiButtonImg from '../Images/Ai ButtonIMG.png'
import GeminiIconWhite from '../Images/GeminiIconWHite.png'

function AiConversationDiv() {
    return (
        <div className='w-screen h-screen p-[10%] bg-[rgba(8,18,37,0.5)]  absolute top-0 z-50'>
            <div className=" p-5 bg-[#081225] rounded-lg">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-5">
                        <img src={GeminiIMG} alt="" className="bg-white p-1 rounded-lg" />
                        <div className="flex items-center gap-4 rounded-xl bg-white">
                            <div className="relative rounded-lg overflow-hidden">
                                <img src={ChatBGImg} alt="" className="w-16 h-11" />
                                <strong className="absolute top-2 left-3 text-white">Chat</strong>
                            </div>
                            <strong className="px-3">Credit : 36/120</strong>
                        </div>
                    </div>
                    <button className="text-xl text-white">X</button>
                </div>
                <div className=' flex gap-3'>
                    <div className=' w-[70%] bg-white rounded-lg '>
                        <div className='h-[700px] overflow-auto latestUserTable'>
                            <div className={`flex p-2 m-2 ${true ? "justify-start" : "justify-end border-2 border-black"}`}>
                                <img src={GeminiIMG} className='w-8 h-8 mr-2' />
                                <p className={` w-80 ${!true ? "border-2 p-1 rounded-lg bg-[#8766FF]" : ""}`}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className={`flex  p-2 m-2 ${false ? "justify-start" : "justify-end "}`}>
                                <p className={` w-80 ${!false ? "border-2 p-1 rounded-lg bg-[#8766FF]" : ""}`}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className={`flex  p-2 m-2 ${false ? "justify-start" : "justify-end "}`}>
                                <p className={` w-80 ${!false ? "border-2 p-1 rounded-lg bg-[#8766FF]" : ""}`}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className={`flex  p-2 m-2 ${true ? "justify-start" : "justify-end "}`}>
                                <p className={` w-80 ${!true ? "border-2 p-1 rounded-lg bg-[#8766FF]" : ""}`}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className={`flex  p-2 m-2 ${true ? "justify-start" : "justify-end "}`}>
                                <p className={` w-80 ${!true ? "border-2 p-1 rounded-lg bg-[#8766FF]" : ""}`}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className={`flex  p-2 m-2 ${false ? "justify-start" : "justify-end "}`}>
                                <p className={` w-80 ${!false ? "border-2 p-1 rounded-lg bg-[#8766FF]" : ""}`}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className={`flex  p-2 m-2 ${false ? "justify-start" : "justify-end "}`}>
                                <p className={` w-80 ${!false ? "border-2 p-1 rounded-lg bg-[#8766FF]" : ""}`}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                        </div>

                        <div className=' flex justify-between items-center bg-[#081225] px-2 mx-2 py-1 rounded-2xl'>
                            <div className=' flex items-center rounded-2xl py-2 px-3 bg-[#081225] flex-1 mr-5 justify-between overflow-hidden'>
                                <img src={GeminiIconWhite} alt="" className='w-8 mr-2 ' />
                                <input type="text" className='outline-none flex-1 text-lg bg-transparent pl-2 text-white' placeholder='Ask me anything' />
                                <Send className='text-white' />
                            </div>


                        </div>


                    </div>
                    <div className='  flex-auto w-[30%]  '>
                        <div className=' h-[57%] mb-6 p-3 rounded-lg bg-white  '>
                            <span className='border-b-2 border-[#8766FF] pb-1'>History Chat</span>
                            <div className='h-[83%] overflow-hidden mt-4 '>
                                <div className='flex gap-2 items-center text-[#808080] hover:text-[#8766FF]'>
                                    <Message />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore................. </p>
                                </div>
                                <div className='flex gap-2 items-center text-[#808080] hover:text-[#8766FF]'>
                                    <Message />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore................. </p>
                                </div>
                                <div className='flex gap-2 items-center text-[#808080] hover:text-[#8766FF]'>
                                    <Message />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore................. </p>
                                </div>
                                <div className='flex gap-2 items-center text-[#808080] hover:text-[#8766FF]'>
                                    <Message />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore................. </p>
                                </div>
                                <div className='flex gap-2 items-center text-[#808080] hover:text-[#8766FF]'>
                                    <Message />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore................. </p>
                                </div>
                            </div>
                            <div className='text-center text-[#8766FF] my-2'>Show All History</div>


                        </div>
                        <div className=' h-[40%]'>
                            <img src={AiButtonImg} className='h-full w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}


export default AiConversationDiv