export default (data, search) => {
  return data.filter((item) => {
    const replacing = (string) => {
      return string.toLowerCase().replace(/\./g, "").replace(/\-/g, " ");
    };
    if (item.lokasi) {
      return replacing(item.lokasi).includes(replacing(search));
    }
    if (item.namaLatin) {
      return replacing(item.namaLatin).includes(replacing(search));
    }
  });
};
