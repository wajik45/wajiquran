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

const Navbar = ({ isDark, setIsDark }) => {
  const location = useLocation();

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

  const conditionalNavbarClass = () => {
    return `
      ${isDark ? "light" : "dark"}-shadow
      ${isDark ? "dark" : "light"}-bg
    `;
  };

  const conditionalButtonClass = () => {
    return `${isDark ? "light" : "dark"}-color`;
  };

  const handleClick = () => {
    if (sessionStorage.getItem("theme") === "dark") {
      setIsDark(false);
      return sessionStorage.setItem("theme", "light");
    }
    setIsDark(true);
    return sessionStorage.setItem("theme", "dark");
  };

  return (
    <div id="navbar" className={conditionalNavbarClass()}>
      <Container>
        <nav>
          <ul>
            <li>
              <Link to="/" className={conditionalButtonClass()}>
                <IconHome className={conditionalHomeClass()} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/quran" className={conditionalButtonClass()}>
                <IconBookQuran className={conditionalIconClass("quran")} />
                <span>Al-Quran</span>
              </Link>
            </li>
            <li>
              <Link to="/asmaul-husna" className={conditionalButtonClass()}>
                <IconList className={conditionalIconClass("asmaul-husna")} />
                <span>Asma'ul Husna</span>
              </Link>
            </li>
            <li>
              <Link to="/jadwal-shalat" className={conditionalButtonClass()}>
                <IconClock className={conditionalIconClass("jadwal-shalat")} />
                <span>Jadwal Shalat</span>
              </Link>
            </li>
            <li>
              {isDark ? (
                <IconMoon onClick={handleClick} className="icon" />
              ) : (
                <IconSunFill
                  onClick={handleClick}
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
