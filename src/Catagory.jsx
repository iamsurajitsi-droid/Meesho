import styles from "./Catagory.module.css";

function Catagory({ cataImage, cataName, link }) {
  return (
    <a
      href={link}
      className={`${styles.catagoryBox} flex flex-col items-center w-37 mr-6`}
    >
      <img src={cataImage} className=" aspect-square w-37" />
      <span className="mt-4 text-[0.8rem] tracking-wider">{cataName}</span>
    </a>
  );
}

export default Catagory;
