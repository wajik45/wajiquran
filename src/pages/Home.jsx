import { MainLayout } from "../layouts/MainLayout";
import { HeaderMain, NavigationHome } from "../components";
import { useEffect, useState } from "react";
import { setTheme, title } from "../utils";

const Home = () => {
  const [isDark, setIsDark] = useState(null);

  useEffect(() => {
    setTheme(setIsDark);
    title("Home");
  }, []);

  return (
    <MainLayout setIsDark={setIsDark} isDark={isDark} fixed={true}>
      <HeaderMain title="WajiQuran" paragraph="Created with ♥ by Haikal" />
      <NavigationHome isDark={isDark} />
    </MainLayout>
  );
};

export default Home;
