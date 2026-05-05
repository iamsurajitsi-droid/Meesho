import styles from "./TrustedBrands.module.css";

function TrustedBrands() {
  const Brands = [
    {
      name: "",
      img: "https://images.meesho.com/images/marketing/1743159302944.webp",
    },
    {
      name: "",
      img: "https://images.meesho.com/images/marketing/1743159322237.webp",
    },
    {
      name: "",
      img: "https://images.meesho.com/images/marketing/1743159363205.webp",
    },
    {
      name: "",
      img: "https://images.meesho.com/images/marketing/1743159377598.webp",
    },
    {
      name: "",
      img: "https://images.meesho.com/images/marketing/1743159393231.webp",
    },
    {
      name: "",
      img: "https://images.meesho.com/images/marketing/1743159415385.webp",
    },
    {
      name: "",
      img: "https://images.meesho.com/images/marketing/1744636558884.webp",
    },
    {
      name: "",
      img: "https://images.meesho.com/images/marketing/1744636599446.webp",
    },
  ];
  return (
    <div
      className={`${styles.brandContainer} overflow-x-auto bg-[#f0e9ff] py-8 flex`}
    >
      <div className={`${styles.wrapper} flex gap-4 w-max px-6`}>
        {Brands.map((brand, i) => {
          return (
            <div
              key={i}
              className={` w-50 h-25 shrink-0 flex items-center justify-center overflow-hidden bg-white rounded-lg`}
            >
              <img
                src={brand.img}
                className="max-w-full max-h-full p-4 object-contain"
              />
            </div>
          );
        })}
      </div>

      <div className={`${styles.wrapper} flex gap-4 w-max px-6`}>
        {Brands.map((brand, i) => {
          return (
            <div
              key={i}
              className={` w-50 h-25 shrink-0 flex items-center justify-center overflow-hidden bg-white rounded-lg`}
            >
              <img
                src={brand.img}
                className="max-w-full max-h-full p-4 object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrustedBrands;
