import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

const TableJadwal = ({ data, date }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  const conditionalThTdClass = `${isDarkMode ? "light" : "dark"}-border-sm`;

  const conditionalTrClass = (item) => {
    const tanggal = item.tanggal;
    const length = tanggal.length;

    return tanggal.slice(length - 10).split("/")[0] == `0${date}`.slice(-2)
      ? "now"
      : `
        ${isDarkMode ? "dark" : "light"}-col
        ${isDarkMode ? "light" : "dark"}-border-sm
      `;
  };

  return (
    <div className="jadwal">
      <div className="jadwal-wrapper">
        <table>
          <tr>
            <th className={conditionalThTdClass}>Tanggal</th>
            <th className={conditionalThTdClass}>Imsak</th>
            <th className={conditionalThTdClass}>Subuh</th>
            <th className={conditionalThTdClass}>Terbit</th>
            <th className={conditionalThTdClass}>Dhuha</th>
            <th className={conditionalThTdClass}>Dzuhur</th>
            <th className={conditionalThTdClass}>Ashar</th>
            <th className={conditionalThTdClass}>Maghrib</th>
            <th className={conditionalThTdClass}>Isya</th>
          </tr>
          {data.map((item) => (
            <tr key={item.tanggal} className={conditionalTrClass(item)}>
              <td className={conditionalThTdClass}>{item.tanggal}</td>
              <td className={conditionalThTdClass}>{item.imsak}</td>
              <td className={conditionalThTdClass}>{item.subuh}</td>
              <td className={conditionalThTdClass}>{item.terbit}</td>
              <td className={conditionalThTdClass}>{item.dhuha}</td>
              <td className={conditionalThTdClass}>{item.dzuhur}</td>
              <td className={conditionalThTdClass}>{item.ashar}</td>
              <td className={conditionalThTdClass}>{item.maghrib}</td>
              <td className={conditionalThTdClass}>{item.isya}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TableJadwal;
