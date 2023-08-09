import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  AsmaulHusna,
  JadwalShalat,
  JadwalShalatById,
  Quran,
  QuranSurat,
  QuranTafsir,
} from "./pages";
import "./scss/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quran",
    element: <Quran />,
  },
  {
    path: "/quran/surat/:id",
    element: <QuranSurat />,
  },
  {
    path: "/quran/tafsir/:id",
    element: <QuranTafsir />,
  },
  {
    path: "/asmaul-husna",
    element: <AsmaulHusna />,
  },
  {
    path: "/jadwal-shalat",
    element: <JadwalShalat />,
  },
  {
    path: "/jadwal-shalat/kota/:id",
    element: <JadwalShalatById />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
