import styles from "./Navbar.module.scss";
import companyLogoLight from "assets/images/logo-black.png";
import companyLogoDark from "assets/images/logo-white.png";
import toggleIconLight from "assets/images/night.png";
import toggleIconDark from "assets/images/day.png";
import { selectTheme, setTheme } from "store/features/themeSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import Hamburger from "components/Buttons/Hamburger/Hamburger";
import { useState } from "react";

const Navbar = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const [isSidebarClose, setIsSidebarClose] = useState(true);

  const toggleTheme = () => {
    theme === "light"
      ? dispatch(setTheme("dark"))
      : dispatch(setTheme("light"));
  };
  return (
    <nav
      className={`${styles.navbarContainer} ${theme === "dark" && styles.dark}`}
    >
      {/* <img
        src={theme === "light" ? companyLogoLight : companyLogoDark}
        alt={"Nesters logo"}
        className={styles.navbarLogo}
      ></img> */}
      <h1 className={styles.navbarLogo}>Nesters</h1>
      <ul>
        <li>Apartments</li>
        <li>Sublets</li>
        <li>Roommates</li>
        <li>Marketplace</li>
        <li>Offers</li>
      </ul>

      {!isSidebarClose && (
        <div className={styles.sidebarDiv}>
          <ul className={styles.sidebar}>
            <li>Apartments</li>
            <li>Sublets</li>
            <li>Roommates</li>
            <li>Marketplace</li>
            <li>Offers</li>
            <li>Profile</li>
          </ul>
        </div>
      )}

      <img
        src={theme === "light" ? toggleIconLight : toggleIconDark}
        alt={"Toggle icon to switch the theme of the website"}
        className={styles.navbarToggleIcon}
        onClick={toggleTheme}
      ></img>
      <Hamburger
        isSidebarClose={isSidebarClose}
        setIsSidebarClose={setIsSidebarClose}
      />
    </nav>
  );
};

export default Navbar;
