export default (setError, setRefresh) => {
  window.addEventListener("online", () => {
    setError(null);
    setRefresh((prev) => prev + 1);
  });
};
