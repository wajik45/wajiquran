export default (setIsDark) => {
  if (sessionStorage.getItem("theme") === "light") {
    setIsDark(false);
  } else {
    sessionStorage.setItem("theme", "dark");
    setIsDark(true);
  }
};
