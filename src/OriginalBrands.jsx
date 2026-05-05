import varifiedLogo from "./assets/icons/tick.png";
import { SlArrowRight } from "react-icons/sl";
import personalCare from "./assets/originalBrands/personalCare.webp";
import electronics from "./assets/originalBrands/electronics.webp";
import makeup from "./assets/originalBrands/makeup.webp";
import smartPhones from "./assets/originalBrands/smartPhones.webp";
import menPerfume from "./assets/originalBrands/men-perfume.webp";
import bags from "./assets/originalBrands/bags.webp";
import footwear from "./assets/originalBrands/footwear.webp";
import books from "./assets/originalBrands/Books.webp";

function OriginalBrands() {
  const brandNames = [
    { name: "Personal Care", brandImg: personalCare },
    { name: "Electronics", brandImg: electronics },
    { name: "Makeup", brandImg: makeup },
    { name: "Smartphones", brandImg: smartPhones },
    { name: "Men Perfume", brandImg: menPerfume },
    { name: "Bags", brandImg: bags },
    { name: "Footwear", brandImg: footwear },
    { name: "Books", brandImg: books },
  ];

  return (
    <div className="original-container">
      {/* Header */}
      <div className="w-full px-6 md:px-16 flex justify-between items-center mt-10 mb-6">
        <span className="flex items-center">
          <span className="text-xl md:text-2xl mr-2">Original Brands</span>
          <img src={varifiedLogo} className="h-6 md:h-8 aspect-square" />
        </span>

        <a href="#">
          <span className="flex items-center text-[#9f2089] text-sm md:text-base">
            VIEW ALL <SlArrowRight />
          </span>
        </a>
      </div>

      {/* Scroll Section */}
      <div className="w-full px-6 md:px-16 overflow-x-auto">
        <div className="flex gap-4 md:gap-6 w-max">
          {brandNames.map((brand, i) => (
            <div
              key={i}
              className="min-w-[140px] sm:min-w-[160px] md:min-w-[200px] aspect-[224/303] flex-shrink-0"
            >
              <img
                src={brand.brandImg}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OriginalBrands;
