import React, { useRef } from "react";
import styles from "./Content.module.css";
import FileUpload from "./FileUpload";
export default function Content({ onFileSubmit }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img
          src="/images/sideImage1.jpeg"
          alt="leftImage"
          className={styles.leftimg}
        />
      </div>
      <div className={styles.centerContainer}>
        <h1>Free Online Photo Editor</h1>
        <p>
          Take your photos further with Canva's free photo editor. Upload, edit,
          and share instantly from one place.
        </p>
        <FileUpload onFileSubmit={onFileSubmit} />
      </div>
      <div className={styles.rightContainer}>
        <img
          src="/images/bgImage.jpeg"
          alt="rightImage"
          className={styles.rightimg}
        />
      </div>
    </div>
  );
}
