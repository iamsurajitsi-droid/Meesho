import heroTwo from "./assets/heroImage/second-hero.webp";
import GoldShopBtn from "./GoldShopBtn";
import style from "./GoldHeroSection.module.css";
import GoldCatagories from "./GoldCatagories";

function GoldHeroSection() {
  return (
    <div className="w-full relative">
      <img src={heroTwo} alt="" className="w-full object-cover" />

      <GoldShopBtn
        className={`${style.goldButton} absolute left-[13%] bottom-[12%]`}
      />

      <GoldCatagories className="absolute right-[5vw] top-1/2 -translate-y-1/2" />
    </div>
  );
}

export default GoldHeroSection;
