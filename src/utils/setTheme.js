export default (setIsDarkMode) => {
  if (sessionStorage.getItem("theme") === "light") {
    return setIsDarkMode(false);
  }
  sessionStorage.setItem("theme", "dark");
  return setIsDarkMode(true);
};
