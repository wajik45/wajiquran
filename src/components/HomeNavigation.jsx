import { Link } from "react-router-dom";

const HomeNavigation = () => {
  return (
    <div className="home-navigation">
      <ul>
        <li>
          <Link to="/quran">Al-Qur'an</Link>
        </li>
        <li>
          <Link to="/asmaul-husna">Asma'ul Husna</Link>
        </li>
        <li>
          <Link to="/jadwal-shalat">Jadwal Shalat</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeNavigation;
