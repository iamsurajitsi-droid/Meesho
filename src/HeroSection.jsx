import HeroImg from "./assets/heroImage/HeroImage.webp";
import HeroContent from "./HeroContent";

function HeroSection() {
  return (
    <div
      className="w-screen relative"
      style={{
        aspectRatio: "1920 / 532",
      }}
    >
      <img src={HeroImg} alt="HeroImage" className="w-full h-full" />
      <HeroContent className="absolute top-1/2 -translate-y-1/2 right-0" />
    </div>
  );
}

export default HeroSection;
