import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import styles from "./App.module.scss";
import RootLayout from "layouts/RootLayout/RootLayout";
import { useAppSelector } from "store/hooks";
import { selectTheme } from "store/features/themeSlice";
import { useEffect } from "react";

function App() {
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);

  return (
    <div
      className={`${styles.appContainer} ${theme === "dark" && styles.dark}`}
    >
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </RootLayout>
    </div>
  );
}

export default App;
