const replacing = (string) => {
  return string.toLowerCase().replace(/\./g, "").replace(/\-/g, " ");
};

export default (data, search) => {
  return data.filter((item) => {
    if (item.lokasi) {
      return replacing(item.lokasi).includes(replacing(search));
    }
    if (item.namaLatin) {
      return (
        replacing(item.namaLatin).includes(replacing(search)) ||
        replacing(item.arti).includes(replacing(search)) ||
        (item.tempatTurun &&
          replacing(item.tempatTurun).includes(replacing(search)))
      );
    }
  });
};
