import { useState } from "react";

const ToTop = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    scrollTo({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  };

  document.onscroll = () => {
    if (scrollY > 100) {
      return setShow(true);
    }
    setShow(false);
  };

  return (
    <div onClick={handleClick} className={`to-top ${show ? "show" : ""}`}>
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-15l5 5h-4v5h-2v-5H7l5-5z" />
      </svg>
    </div>
  );
};

export default ToTop;
