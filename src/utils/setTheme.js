export default (setIsDarkMode) => {
  if (localStorage.getItem("theme") === "light") {
    return setIsDarkMode(false);
  }
  localStorage.setItem("theme", "dark");
  return setIsDarkMode(true);
};
