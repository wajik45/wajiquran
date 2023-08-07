import { Link } from "react-router-dom";
import { Container } from "../layouts";
import {
  IconBookQuran,
  IconClock,
  IconHome,
  IconList,
  IconMoon,
} from "./icons";

const Navbar = () => {
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
