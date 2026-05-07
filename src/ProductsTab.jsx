import { useState } from "react";
import FilterTab from "./FilterTab";
import Products from "./Products";
import SortBy from "./SortBy";

function ProductsTab() {
  const [selectedFilter, setSelectedFilter] = useState("");
  function handleFilterChange(e) {
    console.log(e.target.value);
    setSelectedFilter(e.target.value);
  }
  return (
    <div className={`FeaturesContainer flex`}>
      <div className="features p-6 flex flex-col w-1/5 gap-4 min-w-70">
        <SortBy className={``} />
        <FilterTab handleFilter={handleFilterChange} className={``} />
      </div>

      <Products className={`w-full flex-1`} selectedFilter={selectedFilter} />
    </div>
  );
}

export default ProductsTab;
