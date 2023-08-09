export default (day) => {
  let name;
  switch (day) {
    case 0:
      name = "Minggu";
      break;
    case 1:
      name = "Senin";
      break;
    case 2:
      name = "Selasa";
      break;
    case 3:
      name = "Rabu";
      break;
    case 4:
      name = "Kamis";
      break;
    case 5:
      name = "Jum'at";
      break;
    case 6:
      name = "Sabtu";
      break;
  }
  return name;
};
