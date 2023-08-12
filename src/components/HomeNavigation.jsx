import { Link } from "react-router-dom";

const HomeNavigation = ({ isDark }) => {
  const conditionalButtonClass = () => {
    return `
      ${isDark ? "light" : "dark"}-border
      ${isDark ? "light" : "dark"}-color
    `;
  };

  return (
    <div className="home-navigation">
      <ul>
        <li>
          <Link to="/quran" className={conditionalButtonClass()}>
            Al-Qur'an
          </Link>
        </li>
        <li>
          <Link to="/asmaul-husna" className={conditionalButtonClass()}>
            Asma'ul Husna
          </Link>
        </li>
        <li>
          <Link to="/jadwal-shalat" className={conditionalButtonClass()}>
            Jadwal Shalat
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeNavigation;
