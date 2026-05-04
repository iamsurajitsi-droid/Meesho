import heroTwo from "./assets/heroImage/second-hero.webp";
import GoldShopBtn from "./GoldShopBtn";
import style from "./GoldHeroSection.module.css";
import GoldCatagories from "./GoldCatagories";

function GoldHeroSection() {
  return (
    <div className="w-screen aspect-1440/588 relative">
      <img src={heroTwo} alt="" className="absolute w-full -z-50" />
      <GoldShopBtn
        className={`${style.goldButton} absolute left-[13vw] bottom-[5vw]`}
      />
      <GoldCatagories
        className={`${style.goldCata} absolute left-2/3 top-1/2 -translate-y-1/2`}
      />
    </div>
  );
}

export default GoldHeroSection;
