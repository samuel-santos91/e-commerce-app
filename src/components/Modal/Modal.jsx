import { useEffect, useRef, useContext } from "react";

import { CandlesContext } from "../../context/ProductsContextProvider";
import styles from "./Modal.module.scss";

const Modal = ({ onClose, children }) => {
  const boxRef = useRef(null);
  const { setOpenCart } = useContext(CandlesContext);

  useEffect(() => {
    const closeModalOnOutsideClick = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setOpenCart(false);
      }
    };

    const closeModalOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpenCart(false);
      }
    };

    document.addEventListener("mousedown", closeModalOnOutsideClick);
    document.addEventListener("keydown", closeModalOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeModalOnOutsideClick);
      document.removeEventListener("keydown", closeModalOnEscape);
    };
  }, [boxRef]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.box} ref={boxRef}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
