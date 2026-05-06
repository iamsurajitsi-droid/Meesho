function SortBy({ className }) {
  return (
    <div
      className={`${className} border border-[#d1d5db] p-2 rounded-md w-full flex`}
    >
      <label htmlFor="sortSelect" className="text-[#cfd1d4]">
        Sort By:{" "}
      </label>
      <select
        name="sort"
        id="sortSelect"
        className="ml-4 font-semibold text-[#6b7280] rounded-sm flex-1"
      >
        <option value="?sortBy=title&order=asc">Title</option>
        <option value="?sortBy=price&order=desc">Price</option>
        <option value="?sortBy=rating&order=desc">Rating</option>
        <option value="?sortBy=discountPercentage&order=desc">Discount</option>
      </select>
    </div>
  );
}

export default SortBy;
