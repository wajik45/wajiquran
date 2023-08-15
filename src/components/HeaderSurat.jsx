import { useEffect, useRef, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { IconList, IconPlayFill, IconPauseFill, IconLeft } from "./icons";
import { DarkModeContext } from "../context/DarkMode";

const HeaderSurat = ({ data }) => {
  const { id } = useParams();
  const { isDarkMode } = useContext(DarkModeContext);

  const [play, setPlay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [audioSource, setAudioSource] = useState("");

  const audio = useRef(null);

  useEffect(() => {
    !play ? audio.current.pause() : audio.current.play();
  }, [play]);

  const handlePlay = () => {
    if (audioSource === "") return alert("Pilih qori terlebih dahulu");
    if (loading === true) return;

    setPlay(!play);

    audio.current.onplay = () => setLoading(true);
    audio.current.onplaying = () => setLoading(false);
    audio.current.onended = () => setPlay(false);
  };

  const handleAyat = (e) => {
    const element = document.getElementById(e.target.value);
    scrollTo({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop,
    });
    e.target.selectedIndex = 0;
  };

  const handleQori = ({ target }) => {
    if (loading) {
      audio.current.pause();
      setLoading(false);
    }

    setPlay(false);
    setAudioSource(target.value);
  };

  const conditionalSelectClass = `${isDarkMode ? "dark" : "light"}-bg-semi`;

  const conditionalButtonClass = `
    ${isDarkMode ? "light" : "dark"}-color
    ${isDarkMode ? "light" : "dark"}-border
  `;

  return (
    <>
      <div className="header-quran">
        <select onChange={handleAyat} className={conditionalSelectClass}>
          <option value="">Pilih Ayat</option>
          {data.ayat.map((item) => (
            <option key={item.nomorAyat} value={item.nomorAyat}>
              {item.nomorAyat}
            </option>
          ))}
        </select>
        <select onChange={handleQori} className={conditionalSelectClass}>
          <option value="">Pilih Qori</option>
          {Object.values(data.audioFull).map((item, index) => (
            <option key={index} value={item}>
              {item.split("/")[4].replace(/-/g, " ")}
            </option>
          ))}
        </select>
      </div>
      <div className="header-quran">
        <Link className={conditionalButtonClass} to="/quran">
          <IconLeft />
          <span>Daftar</span>
        </Link>
        <Link className={conditionalButtonClass} to={`/quran/tafsir/${id}`}>
          <IconList />
          <span>Tafsir</span>
        </Link>
        <Link onClick={handlePlay} className={conditionalButtonClass} to="">
          {loading ? (
            <>
              <span>Loading...</span>
            </>
          ) : play ? (
            <>
              <IconPauseFill />
              <span>Pause</span>
            </>
          ) : (
            <>
              <IconPlayFill />
              <span>Play</span>
            </>
          )}
        </Link>
      </div>
      <audio
        ref={audio}
        src={audioSource ? audioSource : null}
        className="audio-full"
      ></audio>
    </>
  );
};

export default HeaderSurat;
