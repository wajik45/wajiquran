import axios from "axios";

export const getAsmaulHusna = async () => {
  return await axios.get("src/data/asmaulHusna.json");
};
