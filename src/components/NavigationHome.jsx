import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

const NavigationHome = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  const conditionalButtonClass = `
    ${isDarkMode ? "light" : "dark"}-border
    ${isDarkMode ? "light" : "dark"}-color
  `;

  return (
    <div className="home-navigation">
      <ul>
        <li>
          <Link to="/quran" className={conditionalButtonClass}>
            Al-Qur'an
          </Link>
        </li>
        <li>
          <Link to="/asmaul-husna" className={conditionalButtonClass}>
            Asma'ul Husna
          </Link>
        </li>
        <li>
          <Link to="/jadwal-shalat" className={conditionalButtonClass}>
            Jadwal Shalat
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationHome;
