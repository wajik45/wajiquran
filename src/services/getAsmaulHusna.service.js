import axios from "axios";
const BASEURL = import.meta.env.VITE_BASE_URL_ASMAUL_HUSNA;

export const getAsmaulHusna = async () => {
  return await axios.get(BASEURL);
};
