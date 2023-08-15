import { Link, useLocation } from "react-router-dom";
import { Container } from "../layouts";
import {
  IconBookQuran,
  IconClock,
  IconHome,
  IconList,
  IconMoon,
  IconSunFill,
} from "./icons";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  const location = useLocation();

  const handleTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      setIsDarkMode(false);
      return localStorage.setItem("theme", "light");
    }
    setIsDarkMode(true);
    return localStorage.setItem("theme", "dark");
  };

  const conditionalHomeClass = () => {
    if (location.pathname === "/") {
      return "icon active";
    }
    return "icon";
  };

  const conditionalIconClass = (pathName) => {
    if (location.pathname.includes(pathName)) {
      return "icon active";
    }
    return "icon";
  };

  const conditionalNavbarClass = `
    ${isDarkMode ? "light" : "dark"}-shadow
    ${isDarkMode ? "dark" : "light"}-bg
  `;

  const conditionalButtonClass = `${isDarkMode ? "light" : "dark"}-color`;

  return (
    <div id="navbar" className={conditionalNavbarClass}>
      <Container>
        <nav>
          <ul>
            <li>
              <Link to="/" className={conditionalButtonClass}>
                <IconHome className={conditionalHomeClass()} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/quran" className={conditionalButtonClass}>
                <IconBookQuran className={conditionalIconClass("quran")} />
                <span>Al-Quran</span>
              </Link>
            </li>
            <li>
              <Link to="/asmaul-husna" className={conditionalButtonClass}>
                <IconList className={conditionalIconClass("asmaul-husna")} />
                <span>Asma'ul Husna</span>
              </Link>
            </li>
            <li>
              <Link to="/jadwal-shalat" className={conditionalButtonClass}>
                <IconClock className={conditionalIconClass("jadwal-shalat")} />
                <span>Jadwal Shalat</span>
              </Link>
            </li>
            <li>
              {isDarkMode ? (
                <IconMoon onClick={handleTheme} className="icon" />
              ) : (
                <IconSunFill
                  onClick={handleTheme}
                  className="icon"
                  style={{ color: "orange" }}
                />
              )}
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
