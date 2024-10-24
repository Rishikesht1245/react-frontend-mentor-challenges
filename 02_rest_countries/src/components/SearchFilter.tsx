import { ChangeEventHandler, useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchFilter = () => {
  const regions = useMemo(
    () => [
      { id: 1, name: "Africa" },
      { id: 2, name: "Asia" },
      { id: 3, name: "Europe" },
      { id: 4, name: "America" },
      { id: 5, name: "Oceania" },
    ],
    []
  );

  const [searchText, setSearchText] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");

  const handleChange = (
    value : string,
    type: "search" | "filter"
  ) => {
    if (type === "search") return setSearchText(value);
    else return setFilterValue(value);
  };

  console.log({searchText, filterValue})
  return (
    <div className="search-filter-container flex-center mb-10">
      <div className="search-filter flex-between">
        {/* Search Input */}
        <div className="box search-box flex-start gap-20">
          <CiSearch size={20} />
          <input
            type="text"
            className="fs-16"
            name="search"
            value={searchText}
            placeholder="Search for a country..."
            onChange={(e) => handleChange(e?.target?.value, "search")}
          />
        </div>

        {/* Filter */}
        <div className="box filter-box">
          <select
            className="fs-16"
            name="filter"
            value={filterValue}
            defaultValue={"Region"}
            onChange={(e) => handleChange(e?.target?.value, 'filter')}
          >
            <option value="">Filter by Region</option>
            {regions?.map((region) => (
              <option key={region?.id} value={region?.name}>
                {region?.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
