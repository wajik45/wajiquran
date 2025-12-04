import { MainLayout } from "../layouts/MainLayout";
import { HeaderMain, NavigationHome } from "../components";
import { useEffect } from "react";
import { title } from "../utils";

const Home = () => {
  useEffect(() => {
    title("Home");
  }, []);

  return (
    <MainLayout fixed={true}>
      <HeaderMain title="WajiQuran" paragraph="Platform Al-Quran digital terlengkap dengan terjemahan bahasa Indonesia, audio berkualitas tinggi dari 6 qari terbaik" />
      <NavigationHome />
    </MainLayout>
  );
};

export default Home;
