export default (setIsDark) => {
  if (sessionStorage.getItem("theme") === "light") {
    return setIsDark(false);
  }
  sessionStorage.setItem("theme", "dark");
  return setIsDark(true);
};
