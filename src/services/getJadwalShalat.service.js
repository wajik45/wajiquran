import axios from "axios";
const BASEURL = import.meta.env.VITE_BASE_URL_JADWAL_SHALAT;

export const getKota = () => {
    return axios.get(BASEURL + '/sholat/kota/semua');
}