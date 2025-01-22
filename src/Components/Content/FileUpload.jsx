import styles from "./Content.module.css";
import React, { useRef, useState } from "react";
import axios from "axios";
import ShowImg from "../ImageView/ShowImg";

export default function FileUpload({ onFileSubmit }) {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className={styles.imgUpload}>
      <button
        onClick={() => onFileSubmit(selectedFile)}
        className={styles.uploadButton}
        disabled={selectedFile ? false : true}
      >
        Start Editing
      </button>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
    </div>
  );
}
