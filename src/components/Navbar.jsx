import { Link, useLocation } from "react-router-dom";
import { Container } from "../layouts";
import {
  IconBookQuran,
  IconClock,
  IconHome,
  IconList,
  IconMoon,
} from "./icons";

const Navbar = () => {
  const location = useLocation();

  const conditionalClassHome = () => {
    if (location.pathname === "/") {
      return "active";
    }
    return "";
  };

  const conditionalClass = (pathName) => {
    if (location.pathname.includes(pathName)) {
      return "active";
    }
    return "";
  };

  return (
    <div id="navbar">
      <Container>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <IconHome className={conditionalClassHome()} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/quran">
                <IconBookQuran className={conditionalClass("quran")} />
                <span>Al-Quran</span>
              </Link>
            </li>
            <li>
              <Link to="/asmaul-husna">
                <IconList className={conditionalClass("asmaul-husna")} />
                <span>Asma'ul Husna</span>
              </Link>
            </li>
            <li>
              <Link to="/jadwal-shalat">
                <IconClock className={conditionalClass("jadwal-shalat")} />
                <span>Jadwal Shalat</span>
              </Link>
            </li>
            <li>
              <IconMoon />
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
