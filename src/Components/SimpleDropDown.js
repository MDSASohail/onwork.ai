const SimpleDropDown = ()=>{
    return(
        <>
                      <div className={`border-2 z-[100] border-borderColor px-1 py-3 rounded-lg w-60 absolute bg-white transition-opacity duration-300 ease-in-out ${indexOfParent===data.length-1?"right-0":""} ${isOptionsVisible ?"visible opacity-100":"invisible opacity-0"}`}>
                            {
                                options.map((eachOption, index) => <p key={index} className='border-b-2 cursor-pointer hover:bg-[#8766FF] px-2 py-3'>{eachOption}</p>)
                            }

                        </div>
        </>
    )
}


export default SimpleDropDown;