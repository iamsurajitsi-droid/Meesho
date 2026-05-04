import lehengas from "./assets/goldCata/lehengas.webp";
import manwear from "./assets/goldCata/manwear.webp";
import sarees from "./assets/goldCata/sarees.webp";
import jewellery from "./assets/goldCata/jewellery.webp";
import styles from "./GoldCatagories.module.css";

function GoldCatagories({ className }) {
  const goldcataArr = [
    { goldCataImg: lehengas },
    { goldCataImg: manwear },
    { goldCataImg: sarees },
    { goldCataImg: jewellery },
  ];
  return (
    <div
      className={`${className} ${styles.cataDiv} max-w-225 min-w-150 aspect-square grid grid-cols-2 gap-16 p-32`}
    >
      {goldcataArr.map((cata) => {
        return (
          <a href="#">
            <img
              src={cata.goldCataImg}
              className={`${styles.goldImg} w-53.25 min-w-30 aspect-213/265 hover:-translate-y-1 transition-all`}
            />
          </a>
        );
      })}
    </div>
  );
}

export default GoldCatagories;
