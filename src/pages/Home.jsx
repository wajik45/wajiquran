import { MainLayout } from "../layouts/MainLayout";
import { HeaderMain, NavigationHome } from "../components";
import { useEffect } from "react";
import { title, setTheme } from "../utils";

const Home = () => {
  useEffect(() => {
    title("Home");
  }, []);

  return (
    <MainLayout fixed={true}>
      <HeaderMain title="WajiQuran" paragraph="Created with ♥ by Haikal" />
      <NavigationHome />
    </MainLayout>
  );
};

export default Home;
