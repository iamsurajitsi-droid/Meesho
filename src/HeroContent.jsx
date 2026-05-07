import styles from "./HeroContent.module.css";

function HeroContent({ className }) {
  return (
    <div className={`${className} ${styles.contentDiv} mr-12`}>
      <h1 className="mb-4 text-[3em] font-bold text-heading  text-white tracking-wider leading-20">
        Smart Shoping <br />
        Trusted by Millions
      </h1>
      <button
        type="button"
        className="pt-4 pb-4 pl-4 pr-4 bg-white ml-8 text-[1.8rem]"
        style={{ borderRadius: "1rem" }}
      >
        Shop Now
      </button>
    </div>
  );
}

export default HeroContent;
