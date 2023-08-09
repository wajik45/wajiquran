const JadwalTable = ({ data, date }) => {
  return (
    <div className="jadwal">
      <div className="jadwal-wrapper">
        <table>
          <tr>
            <th>Tanggal</th>
            <th>Imsak</th>
            <th>Subuh</th>
            <th>Terbit</th>
            <th>Dhuha</th>
            <th>Dzuhur</th>
            <th>Ashar</th>
            <th>Maghrib</th>
            <th>Isya</th>
          </tr>
          {data.map((item) => (
            <tr
              key={item.tanggal}
              className={
                item.tanggal.slice(item.tanggal.length - 10).split("/")[0] ==
                `0${date}`.slice(-2)
                  ? "now"
                  : ""
              }
            >
              <td>{item.tanggal}</td>
              <td>{item.imsak}</td>
              <td>{item.subuh}</td>
              <td>{item.terbit}</td>
              <td>{item.dhuha}</td>
              <td>{item.dzuhur}</td>
              <td>{item.ashar}</td>
              <td>{item.maghrib}</td>
              <td>{item.isya}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default JadwalTable;
