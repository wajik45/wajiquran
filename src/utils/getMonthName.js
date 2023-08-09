export default (month) => {
  let name;
  switch (month) {
    case 0:
      name = "Januari";
      break;
    case 1:
      name = "Februari";
      break;
    case 2:
      name = "Maret";
      break;
    case 3:
      name = "April";
      break;
    case 4:
      name = "Mei";
      break;
    case 5:
      name = "Juni";
      break;
    case 6:
      name = "Juli";
      break;
    case 7:
      name = "Agustus";
      break;
    case 8:
      name = "September";
      break;
    case 9:
      name = "Oktober";
      break;
    case 10:
      name = "November";
      break;
    case 11:
      name = "Desember";
      break;
  }
  return name;
};
