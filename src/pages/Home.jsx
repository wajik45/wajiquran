import { MainLayout } from "../layouts/MainLayout";
import { HeaderMain, HomeNavigation } from "../components";
import { useEffect, useState } from "react";
import { setTheme } from "../utils";

const Home = () => {
  const [isDark, setIsDark] = useState(null);

  useEffect(() => {
    setTheme(setIsDark);
  }, []);

  return (
    <MainLayout setIsDark={setIsDark} isDark={isDark}>
      <HeaderMain title="WajiQuran.id" paragraph="Created with ♥ by Haikal" />
      <HomeNavigation isDark={isDark} />
    </MainLayout>
  );
};

export default Home;
