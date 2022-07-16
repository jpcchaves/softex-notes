// Hooks
import { useEffect, useState } from "react";
// Utils
import { classNames } from "../../utils/classNames";
// CSS Module
import styles from "./ButtonTop.module.css";

const ButtonTop = () => {
  const [isVisible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className={classNames(isVisible ? styles.topo : "")}
        onClick={scrollToTop}
      >
        &#9650;
      </button>
    </>
  );
};

export default ButtonTop;
