function NewOrganization()
{
    return(
        <>
        <div className="p-4 border-2 border-borderColor rounded-xl w-auto max-w-[500px] ">
            <h1 className="text-[#081225] font-[600]  mt- mb-4">New Organization</h1>
            <p className=" text-textLightColor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</p>
             <div className="border-2 border-borderColor p-2 flex rounded-xl flex-col my-4">
                <label htmlFor="company" className="">Organization Name</label>
                <input className="text-xl outline-none" placeholder="Enter company name"/>
             </div>

             <div className="mt-[80px]">
                <button className='bg-textLightColor px-3 py-1 rounded-lg text-white mx-4 hover:bg-borderColor transition-colors'>Cancel</button>
                <button className='bg-textLightColor px-3 py-1 rounded-lg text-white mx-4 hover:bg-borderColor transition-colors'>Add Organization</button>
             </div>

        </div>
        </>
    )
}


export default NewOrganization;