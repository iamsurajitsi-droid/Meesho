import "./App.css";
import BenefitsTab from "./BenefitsTab";
import Header from "./Header";
import HeaderCatagories from "./HeaderCatagories";
import HeroSection from "./HeroSection";
import CaragorySection from "./CaragorySection";
import GoldHeroSection from "./GoldHeroSection";
import OriginalBrands from "./OriginalBrands";
import TrustedBrands from "./TrustedBrands";
import OfferHeroSection from "./OfferHeroSection";
import ProductsTab from "./ProductsTab";

function App() {
  return (
    <>
      <div className="headContainer sticky top-0 left-0 w-full bg-white z-50">
        <Header />
        <HeaderCatagories />
      </div>
      <ProductsTab />
      <HeroSection />
      <BenefitsTab />
      <CaragorySection />
      <GoldHeroSection />
      <OriginalBrands />
      <TrustedBrands />
      <OfferHeroSection />
    </>
  );
}

export default App;
