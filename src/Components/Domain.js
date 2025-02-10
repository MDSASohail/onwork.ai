import {ArrowDropDown} from '@mui/icons-material'

function Domain() {
  return (

    <div className="relative">
      <select  className="w-full py-1 px-6 rounded-lg cursor-pointer font-medium appearance-none bg-white  border-gray-300 focus:outline-none focus:border-blue-500"
      >
        <option value="">Domain</option>
        <option value="">Manage Domain</option>
        <option value="">View Script</option>
        <optgroup label="Switch to" className="text-borderColor text-sm">
          <option value="">Domain #1</option>
          <option value="">Domain #2</option>
          <option value="">Domain #3</option>
        </optgroup>
        <optgroup label="Settings">
          <option value="">Manage all domains</option>
          <option value="">Manage Organization</option>
          <option value="">Add New Domain</option>
        </optgroup>
      </select>
      {/* Custom dropdown icon */}
      <span className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
       <ArrowDropDown/>
      </span>
    </div>


  )
}

export default Domain 