import PantsBoy from "./assets/offerHero-s-cata/lovely-pants-hero.webp";
import MoneyPlant from "./assets/offerHero-s-cata/money-plant-lady.webp";
import PajamaBoy from "./assets/offerHero-s-cata/starboy-pagama.webp";
import CookerLady from "./assets/offerHero-s-cata/coocker-lady.webp";

function OffersCards({ className, childClass }) {
  const cardArr = [
    {
      text: "Trending Now",
      imgLink: PantsBoy,
    },
    {
      text: "Budget Buys",
      imgLink: MoneyPlant,
    },
    {
      text: "Top Rated Picks",
      imgLink: PajamaBoy,
    },
    {
      text: "Daily Essentials",
      imgLink: CookerLady,
    },
  ];

  return (
    <div className={`${className} grid grid-cols-4 shrink-0`}>
      {cardArr.map((card) => {
        return (
          <div
            className={`${childClass} offersCardBox p-4 rounded-4xl transition hover:-translate-y-1 hover:shadow-2xl`}
          >
            <img src={card.imgLink} className={`top-0`} />
            {/* CardName */}
            <p
              className={`w-full flex items-center justify-center mt-6 bg-white py-3 text-2xl font-semibold text-[#570d48] rounded-xl border border-[#ff9d00] tracking-wide max-2xl:text-[1rem]`}
            >
              {card.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default OffersCards;
