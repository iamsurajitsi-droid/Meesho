import styles from "./TrustedBrands.module.css";

function TrustedBrands() {
  const Brands = [
    { img: "https://images.meesho.com/images/marketing/1743159302944.webp" },
    { img: "https://images.meesho.com/images/marketing/1743159322237.webp" },
    { img: "https://images.meesho.com/images/marketing/1743159363205.webp" },
    { img: "https://images.meesho.com/images/marketing/1743159377598.webp" },
    { img: "https://images.meesho.com/images/marketing/1743159393231.webp" },
    { img: "https://images.meesho.com/images/marketing/1743159415385.webp" },
    { img: "https://images.meesho.com/images/marketing/1744636558884.webp" },
    { img: "https://images.meesho.com/images/marketing/1744636599446.webp" },
  ];

  return (
    <div className={`${styles.brandContainer} bg-[#f0e9ff] py-8`}>
      <div className={`${styles.track}`}>
        <div className="flex gap-4 w-max px-6">
          {Brands.map((brand, i) => (
            <div
              key={`first-${i}`}
              className={`${styles.images} w-[200px] h-[100px] shrink-0 flex items-center justify-center bg-white rounded-lg transition`}
            >
              <img
                src={brand.img}
                alt=""
                className="max-w-full max-h-full p-4 object-contain"
              />
            </div>
          ))}
        </div>

        <div className="flex gap-4 w-max">
          {Brands.map((brand, i) => (
            <div
              key={`second-${i}`}
              className={`${styles.images} w-[200px] h-[100px] shrink-0 flex items-center justify-center bg-white rounded-lg transition`}
            >
              <img
                src={brand.img}
                alt=""
                className={`max-w-full max-h-full p-4 object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustedBrands;
