function NewSite() {
    return (
        <>

            <div className="p-4 border-2 text-textLightColor border-borderColor rounded-xl w-auto min-w-[400px] max-w-[500px]">
                <form>
                    <h1 className="font-medium mb-4">New Site</h1>

                    <div className="p-2 bg-[#EAF0FF] hover:border-borderColor rounded-lg border-2 flex flex-col my-3 hover:text-black transition-colors">
                        <label>Organization</label>
                        <select className="bg-transparent outline-none">
                            <option disabled selected>Please select</option>
                            <option>IT Industry</option>
                            <option>Marketing</option>

                        </select>
                    </div>

                    <div className="p-2 hover:border-borderColor bg-[#EAF0FF] hover:text-black transition-colors rounded-lg border-2 flex flex-col my-3">
                        <label htmlFor="siteName">Site Name</label>
                        <input id="siteName" className="bg-transparent outline-none" placeholder="Enter website" />
                    </div>
                    <div className="p-2 hover:border-borderColor bg-[#EAF0FF] rounded-lg border-2 flex flex-col my-3 hover:text-black transition-colors">
                        <label htmlFor="siteName">Site URL</label>
                        <input className="bg-transparent outline-none" placeholder="https://www.example.com" />
                    </div>

                    <div className="p-2 hover:border-borderColor bg-[#EAF0FF] rounded-lg border-2 flex flex-col my-3 hover:text-black transition-colors">
                        <label>Industry/Sector</label>
                        <select className="bg-transparent outline-none">
                            <option disabled selected>Please select</option>
                            <option>IT Industry</option>
                            <option>Marketing</option>

                        </select>
                    </div>

                    <div className="mt-[60px]">
                        <button className='bg-textLightColor px-3 py-1 rounded-lg text-white mx-4 hover:bg-borderColor transition-colors'>Cancel</button>
                        <button className='bg-textLightColor px-3 py-1 rounded-lg text-white mx-4 hover:bg-borderColor transition-colors'>Add Organization</button>
                    </div>
                </form>

            </div>
        </>
    )
}


export default NewSite