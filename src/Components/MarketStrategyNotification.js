import Circle from '@mui/icons-material/Circle'
import Cancel from '@mui/icons-material/Cancel'
import { setCookies } from '../JSFunctions/JavaScriptFunction'
function MarketStrategyNotification({isMarketingOn, setIsMarketingOn, setShowToast}) {
  const cancleMarketingDiv = () =>{
    setIsMarketingOn(false); // "" = false
    setShowToast(true)
    setCookies("name","Sohail Ansari", 0.01);
    console.log("Value change", isMarketingOn)
  }
  return (
    
    <div className='text-center w-screen  h-6  text-white relative bg-[#8766FF] '> 
         <Circle  style={{width:"8px", height:"8px", marginRight:'17px'}}/>
         Upgrade your plan for more In Depth Analysis!
         <Circle  style={{width:"8px", height:"8px", marginLeft:'17px'}}/>
         <button className='absolute  right-6 -top-[2px]'  onClick={cancleMarketingDiv}>
          <Cancel style={{fontSize:'18px'}}/>
         </button>
    </div>
  )
}

export default MarketStrategyNotification