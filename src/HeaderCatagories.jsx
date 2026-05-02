import styles from "./HeaderCatagories.module.css";

function HeaderCatagories() {
  const cataList = [
    "Popular",
    "Kurti, Saree & Lehenga",
    "Women Western",
    "Lingerie",
    "Men",
    "Kids & Toys",
    "Home & Kitchen",
    "Beauty & Health",
    "Jewellery & Accessories",
    "Bags & Footwear",
    "Electronics",
    "Watches",
    "Sports & Fitness",
    "Car & Motorbike",
    "Office Supplies & Stationery",
    "Grocery",
    "Books",
    "Pet Supplies",
    "Musical Instruments",
  ];

  return (
    <div className="cataContainer h-13 ml-16 mr-16 flex-1 overflow-x-scroll flex whitespace-nowrap scroll-smooth no-scrollbar border-b border-[#6060626b]">
      {cataList.map((cata) => {
        return (
          <a
            className={`${styles.catagories} shrink-0 h-full flex items-center cursor-pointer`}
            key={cata}
          >
            {cata}
          </a>
        );
      })}
    </div>
  );
}

export default HeaderCatagories;
