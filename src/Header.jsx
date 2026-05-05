import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className="Header-container flex h-18 items-center justify-center border-b border-[#6060626b] ml-24 mr-24">
      <Link
        to={"#"}
        className="AppName text-5xl text-[#570d48] font-semibold mr-8"
      >
        meesho
      </Link>
      <div className="searchBar w-150 h-11.25 border border-[#8b8ba3] rounded-[0.40rem] flex items-center pl-2">
        <IoIosSearch size={27} className="" opacity={0.5} />
        <input
          className="Search-input h-full min-w-0 flex-1 outline-0 pl-1"
          type="text"
          placeholder="Try Saree, Kurti or Search by Product Code"
        />
      </div>

      <div className="right-hand-side w-1/2 flex justify-end h-full items-center">
        <Link
          to={"/"}
          className="h-5/10 flex items-center border-r-2 border-[#cecede] pr-4 pl-4 tracking-wider"
        >
          Become a Supplier
        </Link>
        <Link
          to={"/"}
          className="h-5/10 flex items-center border-r-2 border-[#cecede] pr-4 pl-4 tracking-wider"
        >
          Investor Relations
        </Link>
        <Link
          to={"/"}
          className={`${styles.headerHover} flex flex-col items-center pl-4 pr-4 leading-1.53`}
        >
          <FiUser size={20} opacity={0.6} />
          <p className={`${styles.headHoverText} tracking-wider`}>Profile</p>
        </Link>
        <Link
          to={"/"}
          className={`${styles.headerHover} flex flex-col items-center pl-4 pr-4 leading-1.53`}
        >
          <BsCart2 size={20} opacity={0.6} />
          <p className={`${styles.headHoverText} tracking-wider`}>Cart</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
