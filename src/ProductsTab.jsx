import FilterTab from "./FilterTab";
import SortBy from "./SortBy";

function ProductsTab() {
  return (
    <div className={`FeaturesContainer`}>
      <div className="features p-6 border border-[#d1d5db] flex flex-col w-1/5 gap-4">
        <SortBy className={``} />
        <FilterTab className={``} />
      </div>
    </div>
  );
}

export default ProductsTab;
