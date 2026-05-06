import OfferDownloadButton from "./OfferDownloadButton";
import OfferHeroCata from "./OfferHeroCata";
import styles from "./OfferHeroSection.module.css";
import HeroImage from "./assets/heroImage/offer-heroImg.webp";

function OfferHeroSection() {
  // temp-margin at down
  return (
    <div className={`HeroContainer mb-20 w-screen aspect-1920/532 relative`}>
      <img src={HeroImage} className={`h-full w-full absolute -z-50`} />
      <OfferDownloadButton className={"left-1/20 bottom-1/6 absolute"} />
      <OfferHeroCata
        className={`${styles.offersCataContainer} absolute right-0 top-1/2 -translate-y-1/2 text-center max-[1920px]:max-w-250 max-2xl:max-w-200 `}
        childClass={``}
      />
    </div>
  );
}

export default OfferHeroSection;
