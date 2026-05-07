import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

function Products({ className, selectedFilter }) {
  const [products, setProducts] = useState({ products: [] });

  useEffect(() => {
    //First Fetch
    const controller = new AbortController();
    const signal = controller.signal;
    async function FirstFetch() {
      try {
        const responce = fetch("https://dummyjson.com/products?limit=200", {
          signal,
        });
        const data = await responce.then((res) => res.json());
        if (Array.isArray(data.products)) {
          setProducts({ products: data.products });
        } else {
          console.error("API did not return an array:", data);
          setProducts({ products: [] });
        }
      } catch (err) {
        console.error("Error fetching all products:", err);
        setProducts({ products: [] });
      }
    }
    FirstFetch();
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(selectedFilter);
        const data = await response.json();
        // Add this check: Ensure data is an array
        if (Array.isArray(data.products)) {
          setProducts({ products: data.products });
        } else {
          console.error("API did not return an array:", data);
          setProducts({ products: [] }); // Fallback to empty array
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts({ products: [] }); // Fallback on error
      }
    };

    fetchProducts();
  }, [selectedFilter]);

  return (
    <div
      className={`${className} products grid grid-cols-4 h-fit gap-2 min-h-40 justify-center items-center  pt-4 min-[121rem]:grid-cols-5 max-[93.75rem]:grid-cols-3`}
    >
      {/* Product Div */}
      {products.products.map((product) => {
        return (
          <div
            key={product.id}
            className="aspect-325/405 w-81.25 border border-[#eaeaf2] text-[1rem] flex flex-col p-2 bg-white m-2 rounded-lg cursor-pointer max-[109rem]:w-75 max-[102rem]:w-70 max-[93.75rem]:w-85 max-[84.3rem]:w-75 max-[74.3rem]:w-70"
          >
            {/* Product image */}
            <div className="w-full h-1/2">
              <img
                src={product.thumbnail}
                alt=""
                className="object-contain h-full w-full top-0 left-0"
              />
            </div>
            {/* Producr Name */}
            <p className=" text-[1.1em] tracking-wide text-[#8b8ba3] pt-4 pb-2">
              {product.title}
            </p>
            {/* Price */}
            <span className="text-[1.4em] font-extrabold text-black flex items-center tracking-wide">
              ${product.price} {/* Discounted Price */}
              <span className="font-normal mx-3 line-through text-[#8b8ba3] text-[0.8em]">
                $
                {product.price +
                  Math.round(
                    (product.price * product.discountPercentage) / 100,
                  )}
              </span>
              {/* Discount */}
              <span className="text-[#038d63] text-[0.7em]">
                {product.discountPercentage} off
              </span>
            </span>

            <span className="flex items-center w-fit mt-5">
              {/* Rating */}
              <span className="flex items-center gap-1 rounded-[45px] bg-[#038d63] text-white w-fit px-2 ">
                {product.rating.toFixed(1)} <FaStar className="text-[0.8em]" />
              </span>
              {/* Reviews */}
              <span className="text-[#8b8ba3] text-[0.8em] ml-2 tracking-wide font-bold">
                {product.reviews.length} reviewes
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
