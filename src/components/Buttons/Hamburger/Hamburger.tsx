import React from "react";
import { selectTheme } from "store/features/themeSlice";
import { useAppSelector } from "store/hooks";
import styles from "components/Buttons/Hamburger/Hamburger.module.scss";

interface HamburgerProps {
  isSidebarClose: boolean;
  setIsSidebarClose: (value: boolean) => void;
}

const Hamburger: React.FC<HamburgerProps> = ({
  isSidebarClose,
  setIsSidebarClose,
}) => {
  const theme = useAppSelector(selectTheme);
  return (
    <div className={styles.hamburgerIcon}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="28px"
        viewBox="0 -960 960 960"
        width="24px"
        fill={theme === "dark" ? "#fff" : "#000"}
        onClick={() => setIsSidebarClose(!isSidebarClose)}
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </div>
  );
};

export default Hamburger;
