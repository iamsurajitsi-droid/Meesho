import Catagory from "./Catagory";
import woman from "./assets/cataImage/woman.webp";
import womanFrog from "./assets/cataImage/woman-frog.webp";
import man from "./assets/cataImage/man.webp";
import boots from "./assets/cataImage/boots.webp";
import flowerpot from "./assets/cataImage/flower.webp";
import bag from "./assets/cataImage/bags.webp";
import beauty from "./assets/cataImage/face-product.webp";
import grosaries from "./assets/cataImage/grosaries.webp";

function CaragorySection() {
  const cataArr = [
    {
      cataImageLink: woman,
      cataName: "Ethnic Wear",
      link: "#",
    },
    {
      cataImageLink: womanFrog,
      cataName: "Western Dresses",
      link: "#",
    },
    {
      cataImageLink: man,
      cataName: "Menswear",
      link: "#",
    },
    {
      cataImageLink: boots,
      cataName: "Footwear",
      link: "#",
    },
    {
      cataImageLink: flowerpot,
      cataName: "Home Decor",
      link: "#",
    },
    {
      cataImageLink: bag,
      cataName: "Beauty",
      link: "#",
    },
    {
      cataImageLink: beauty,
      cataName: "Accessories",
      link: "#",
    },
    {
      cataImageLink: grosaries,
      cataName: "Grocery",
      link: "#",
    },
  ];

  return (
    <div className="w-full flex justify-center overflow-x-scroll overflow-y-visible mt-4 pt-4 mb-8 no-scrollbar">
      <div className="flex ">
        {cataArr.map((cata) => {
          return (
            <Catagory
              key={cata.cataName}
              cataImage={cata.cataImageLink}
              cataName={cata.cataName}
              link="#"
            />
          );
        })}
      </div>
    </div>
  );
}

export default CaragorySection;
