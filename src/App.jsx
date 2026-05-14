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
import Footer from "./Footer";

function App() {
  return (
    <div className="AppContainer max-w-[100vw] overflow-hidden">
      <div className="headContainer sticky top-0 left-0 w-full bg-white z-50">
        <Header />
        <HeaderCatagories />
      </div>
      <HeroSection />
      <BenefitsTab />
      <CaragorySection />
      <GoldHeroSection />
      <OriginalBrands />
      <TrustedBrands />
      <OfferHeroSection />
      <ProductsTab />
      <Footer />
      {/* Test */}
    </div>
  );
}

export default App;
