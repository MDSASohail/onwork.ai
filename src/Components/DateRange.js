import { SyncAlt, ArrowDropDown } from "@mui/icons-material";
import { useState } from "react";

function DateRangeComponent({ text }) {
    const [range, setRange] = useState({
        isOpen: false,
        selectedOption: null,
        isCustomRangeOpen: false,
    });

    // Handle select date range
    const selectDate = (selectedValue, optionType, isCustomRange = false) => {
        if (isCustomRange) {
            setRange((prev) => ({
                ...prev,
                isCustomRangeOpen: true,
                selectedOption: "CustomRange",
                isOpen: true, // Keep dropdown open when Custom Range is selected
            }));
        } else {
            setRange((prev) => ({
                ...prev,
                selectedOption: optionType,
                isOpen: false, // Close dropdown for non-custom selections
                isCustomRangeOpen: false,
            }));
        }
    };

    // Handle mouse leave to close the dropdown
    const handleMouseLeave = () => {
        setRange((prev) => ({ ...prev, isOpen: false }));
    };

    // Prevent closing dropdown when clicking inside the date input fields
    const preventDropdownClose = (e) => {
        e.stopPropagation();
    };

    const options = [
        { label: "Today", value: "today" },
        { label: "Yesterday", value: "yesterday" },
        { label: "2 Days", value: "2Days" },
        { label: "5 Days", value: "5Days" },
        { label: "7 Days", value: "7Days" },
        { label: "15 Days", value: "15Days" },
        { label: "30 Days", value: "30Days" },
        { label: "Custom Range", value: "CustomRange" },
    ];

    return (
        <>
            <div
                className="flex justify-end cursor-pointer "
                onClick={() => setRange((prev) => ({ ...prev, isOpen: !prev.isOpen }))}
                onMouseLeave={handleMouseLeave}
            >
                <h1 className="text-white text-lg font-medium hidden lg:block">{text}</h1>
                <div className="py-1 ml-2 border- border-red-900 bg-white rounded-xl w-36 flex justify-between px-3">
                    <span>From </span>
                    <span><SyncAlt color="red" /></span>
                    <span>To</span>
                    <div className="relative">
                        <ArrowDropDown />
                        <div
                            className={`bg-white px-1 py-2 absolute top-7 w-36 rounded-xl -right-3 border-borderColor transition-opacity border-2 ${range.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                        >
                            {options.map((option) => (
                                <p
                                    key={option.value}
                                    className={`border-b-2 py-2 px-2 hover:bg-borderColor hover:text-white transition-colors ${range.selectedOption === option.value ? "bg-borderColor text-white" : "text-black bg-white"
                                        }`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        selectDate(option.value, option.value, option.value === "CustomRange");
                                    }}
                                >
                                    {option.label}
                                </p>
                            ))}
                            {range.isCustomRangeOpen && (
                                <div>
                                    <div>
                                        <h2 className="ml-2">From</h2>
                                        <div className="rounded-2xl border-textLightColor border-2 p-1 mx-1">
                                            <input
                                                onClick={preventDropdownClose} // Prevent dropdown from closing
                                                type="date"
                                                className="outline-none w-full text-textLightColor"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="ml-2">To</h2>
                                        <div className="rounded-2xl border-textLightColor border-2 p-1 mx-1">
                                            <input
                                                onClick={preventDropdownClose} // Prevent dropdown from closing
                                                type="date"
                                                className="outline-none w-full text-textLightColor"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DateRangeComponent;
