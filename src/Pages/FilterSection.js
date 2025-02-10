import EachFilter from "../Components/EachFilter";

const FiltersSection = ({ filters = [], onClearFilters }) => (
    <div className=" py-2 px-2 flex flex-wrap justify-evenly bg-white rounded-2xl relative">
      {filters.map((filter, index) => (
        <EachFilter
          key={index}
          value={filter.value}
          operation={filter.operation}
          criteria={filter.criteria}
        />
      ))}
      <button onClick={onClearFilters} className="px-3 py-1 border-2 rounded-2xl">
        Clear All Filters
      </button>
    </div>
  );
  

  export default FiltersSection
  
  