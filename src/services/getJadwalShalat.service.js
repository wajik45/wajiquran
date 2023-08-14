import axios from "axios";
const BASEURL = import.meta.env.VITE_BASE_URL_JADWAL_SHALAT;

export const getJadwalShalat = (props) => {
  const { id, year, month } = props;
  return axios.get(BASEURL + `/sholat/jadwal/${id}/${year}/${month + 1}`);
};
