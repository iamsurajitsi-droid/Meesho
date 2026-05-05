import lehengas from "./assets/goldCata/lehengas.webp";
import manwear from "./assets/goldCata/manwear.webp";
import sarees from "./assets/goldCata/sarees.webp";
import jewellery from "./assets/goldCata/jewellery.webp";

function GoldCatagories({ className }) {
  const goldcataArr = [
    { goldCataImg: lehengas },
    { goldCataImg: manwear },
    { goldCataImg: sarees },
    { goldCataImg: jewellery },
  ];

  return (
    <div
      className={`
        ${className}
        grid grid-cols-2
        gap-4 sm:gap-6 md:gap-8
        w-[40vw] max-w-[320px]
      `}
    >
      {goldcataArr.map((cata, i) => {
        return (
          <a href="#" key={i}>
            <img
              src={cata.goldCataImg}
              className="
                w-full
                aspect-213/265
                object-cover
                transition-transform duration-300
                hover:-translate-y-1
              "
            />
          </a>
        );
      })}
    </div>
  );
}

export default GoldCatagories;
