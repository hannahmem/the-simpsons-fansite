import { useEffect, useState } from "react";
import "./ScrollButton.css";

function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  function handleScroll() {
    const pageBottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 50;
    setShowButton(pageBottom);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <button
      className={showButton ? "btn-visible" : "btn-hidden"}
      onClick={() => scrollToTop()}>
      🔝
    </button>
  );
}

export default ScrollButton;
