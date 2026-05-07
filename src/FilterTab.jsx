function FilterTab({ className, handleFilter }) {
  const cataArr = [
    {
      slug: "beauty",
      name: "Beauty",
      url: "https://dummyjson.com/products/category/beauty",
    },
    {
      slug: "fragrances",
      name: "Fragrances",
      url: "https://dummyjson.com/products/category/fragrances",
    },
    {
      slug: "furniture",
      name: "Furniture",
      url: "https://dummyjson.com/products/category/furniture",
    },
    {
      slug: "groceries",
      name: "Groceries",
      url: "https://dummyjson.com/products/category/groceries",
    },
    {
      slug: "home-decoration",
      name: "Home Decoration",
      url: "https://dummyjson.com/products/category/home-decoration",
    },
    {
      slug: "kitchen-accessories",
      name: "Kitchen Accessories",
      url: "https://dummyjson.com/products/category/kitchen-accessories",
    },
    {
      slug: "laptops",
      name: "Laptops",
      url: "https://dummyjson.com/products/category/laptops",
    },
    {
      slug: "mens-shirts",
      name: "Mens Shirts",
      url: "https://dummyjson.com/products/category/mens-shirts",
    },
    {
      slug: "mens-shoes",
      name: "Mens Shoes",
      url: "https://dummyjson.com/products/category/mens-shoes",
    },
    {
      slug: "mens-watches",
      name: "Mens Watches",
      url: "https://dummyjson.com/products/category/mens-watches",
    },
    {
      slug: "mobile-accessories",
      name: "Mobile Accessories",
      url: "https://dummyjson.com/products/category/mobile-accessories",
    },
    {
      slug: "motorcycle",
      name: "Motorcycle",
      url: "https://dummyjson.com/products/category/motorcycle",
    },
    {
      slug: "skin-care",
      name: "Skin Care",
      url: "https://dummyjson.com/products/category/skin-care",
    },
    {
      slug: "smartphones",
      name: "Smartphones",
      url: "https://dummyjson.com/products/category/smartphones",
    },
    {
      slug: "sports-accessories",
      name: "Sports Accessories",
      url: "https://dummyjson.com/products/category/sports-accessories",
    },
    {
      slug: "sunglasses",
      name: "Sunglasses",
      url: "https://dummyjson.com/products/category/sunglasses",
    },
    {
      slug: "tablets",
      name: "Tablets",
      url: "https://dummyjson.com/products/category/tablets",
    },
    {
      slug: "tops",
      name: "Tops",
      url: "https://dummyjson.com/products/category/tops",
    },
    {
      slug: "vehicle",
      name: "Vehicle",
      url: "https://dummyjson.com/products/category/vehicle",
    },
    {
      slug: "womens-bags",
      name: "Womens Bags",
      url: "https://dummyjson.com/products/category/womens-bags",
    },
    {
      slug: "womens-dresses",
      name: "Womens Dresses",
      url: "https://dummyjson.com/products/category/womens-dresses",
    },
    {
      slug: "womens-jewellery",
      name: "Womens Jewellery",
      url: "https://dummyjson.com/products/category/womens-jewellery",
    },
    {
      slug: "womens-shoes",
      name: "Womens Shoes",
      url: "https://dummyjson.com/products/category/womens-shoes",
    },
    {
      slug: "womens-watches",
      name: "Womens Watches",
      url: "https://dummyjson.com/products/category/womens-watches",
    },
  ];
  return (
    //Container
    <div
      className={`${className} border border-[#d1d5db] p-2 rounded-md w-full flex flex-col gap-4`}
    >
      {/* //paragraph */}
      <p className={`font-semibold text-2xl pl-4`}>Categories :</p>
      <div className={`filters ml-4 text-2xl`}>
        {cataArr.map((cata) => {
          return (
            <div
              key={cata.slug}
              className="mb-4 text-[#5f6164] flex items-center"
            >
              <input
                type="radio"
                name={`category`}
                value={cata.url}
                id={cata.slug}
                onChange={handleFilter}
              />
              <label htmlFor={cata.slug} className="text-[1.2rem]">
                {cata.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilterTab;

