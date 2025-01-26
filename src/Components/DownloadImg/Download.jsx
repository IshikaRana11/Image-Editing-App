import React from "react";
import styles from "./Download.module.css";
const Download = ({ file }) => {
  function downloadFile() {
    try {
      if (file) {
        const downloadLink = document.createElement("a");
        downloadLink.setAttribute(
          "href",
          URL.createObjectURL(new Blob([file], { type: "image/jpeg" }))
        );
        downloadLink.setAttribute("download", true);
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(downloadLink.href);
      }
    } catch (error) {
      console.error("Error downloading file:", error);
      alert(
        "Sorry, there was an issue downloading the file. Please try again later."
      );
    }
  }
  return (
    <div className={styles.dld}>
      <button onClick={() => downloadFile()}>
        <img src="/images/download.png" />
      </button>
    </div>
  );
};

export default Download;
