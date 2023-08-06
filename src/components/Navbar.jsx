import { Link, useLocation } from "react-router-dom";
import { Container } from "../layouts";
import { Icons } from ".";

const Navbar = () => {
  const { IconBookQuran, IconClock, IconHome, IconList, IconMoon } = Icons;
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div id="navbar">
      <Container>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <IconHome />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/quran">
                <IconBookQuran />
                <span>Al-Quran</span>
              </Link>
            </li>
            <li>
              <Link to="/asmaul-husna">
                <IconList />
                <span>Asma'ul Husna</span>
              </Link>
            </li>
            <li>
              <Link to="/jadwal-shalat">
                <IconClock />
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
