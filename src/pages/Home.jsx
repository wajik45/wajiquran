import { MainLayout } from "../layouts/MainLayout";
import { HeaderMain, NavigationHome } from "../components";
import { useEffect, useState } from "react";
import { setTheme } from "../utils";

const Home = () => {
  const [isDark, setIsDark] = useState(null);

  useEffect(() => {
    setTheme(setIsDark);
  }, []);

  return (
    <MainLayout setIsDark={setIsDark} isDark={isDark} fixed={true}>
      <HeaderMain title="WajiQuran" paragraph="Created with ♥ by Haikal" />
      <NavigationHome isDark={isDark} />
    </MainLayout>
  );
};

export default Home;
