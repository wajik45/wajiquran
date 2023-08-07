import axios from "axios";
const BASEURL = import.meta.env.VITE_BASE_URL_QURAN;

export const getSuratList = async () => {
  return await axios.get(BASEURL + "/surat");
};

export const getSuratById = async (id) => {
  return await axios.get(BASEURL + `/surat/${id}`);
};

export const getTafsirById = async (id) => {
  return await axios.get(BASEURL + `/tafsir/${id}`);
};
