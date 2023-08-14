import axios from "axios";
const BASEURL = import.meta.env.VITE_BASE_URL_QURAN;

export const getTafsirById = async (id) => {
  return await axios.get(BASEURL + `/tafsir/${id}`);
};
