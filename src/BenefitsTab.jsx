import returns from "./assets/icons/returns.svg";
import cod from "./assets/icons/cod.svg";
import BenefitsChild from "./BenefitsChild";

function BenefitsTab() {
  return (
    <div className="parentBenefits flex justify-center items-center w-screen h-18 bg-[#fdeefa] pl-4 pr-4">
      <div className="childBenefits flex justify-center pt-3 pb-3 bg-white w-full rounded-2xl border border-[#dc94d0]">
        <BenefitsChild
          text="7 Days Easy Return"
          icon={returns}
          rightBorder={true}
        />
        <BenefitsChild text="Cash on Delivery" icon={cod} rightBorder={true} />
        <BenefitsChild text="Lowest Prices" icon={cod} rightBorder={false} />
      </div>
    </div>
  );
}

export default BenefitsTab;
