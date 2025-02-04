import { useEffect, useState } from "react"

function CopiedMSG()
{


    
    return(
        <>
        <div className="rounded-lg px-3 py-2 bg-borderColor text-white relative ">
            <p>Copied</p>
            <p className="w-4 h-4 absolute -bottom-1 rotate-45 bg-borderColor left-8"></p>
        </div>
        </>
    )
}

export default CopiedMSG