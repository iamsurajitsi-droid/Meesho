import "./App.css";
import BenefitsTab from "./BenefitsTab";
import Header from "./Header";
import HeaderCatagories from "./HeaderCatagories";
import HeroSection from "./HeroSection";

function App() {
  return (
    <>
      <div className="headContainer sticky top-0 left-0 w-full bg-white z-50">
        <Header />
        <HeaderCatagories />
      </div>
      <HeroSection />
      <BenefitsTab />
    </>
  );
}

export default App;
