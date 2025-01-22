import React from "react";
import styles from "./Navbar.module.css";
import classNames from "classnames";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src="/images/logo.jpeg" alt="Logo Image" className={styles.logo} />
      <div className={styles.btns}>
        <button className={classNames(styles.roundedBtn, styles.logbtn)}>
          Log in
        </button>
        <button className={classNames(styles.roundedBtn, styles.signbtn)}>
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
