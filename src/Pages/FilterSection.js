import EachFilter from "../Components/EachFilter";

const FiltersSection = ({ filters = [], onClearFilters }) => (
  <>
    <div className="py-2 px-2 flex flex-wrap justify-between bg-white rounded-2xl relative">
      {filters.map((filter, index) => (
        <EachFilter
          key={index}
          value={filter.value}
          operation={filter.operation}
          criteria={filter.criteria}
        />

      ))}

      <button
        onClick={onClearFilters}
        className="px-2 bg-[#E6E6E6] text-[#808080]  m-1 py-1 border-2 rounded-xl"
      >
        Clear All Filters
      </button>


    </div>


  </>
);


export default FiltersSection

