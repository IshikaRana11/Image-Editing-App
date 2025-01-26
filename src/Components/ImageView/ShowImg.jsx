import React, { useState, useEffect } from "react";
import EditOptions from "../EditOptions/EditOptions";
import { Jimp } from "jimp";
import Download from "../DownloadImg/Download";
import styles from "./ShowImg.module.css";
export default function ShowImg({ file }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [duplicateFile1, setDuplicateFile1] = useState(file);
  const [duplicateFile2, setDuplicateFile2] = useState(file);
  useEffect(() => {
    async function conversionBase64() {
      const image = await Jimp.fromBuffer(duplicateFile2);
      const base64 = await image.getBase64("image/jpeg");
      setImageUrl(base64);
    }
    conversionBase64();
  }, [duplicateFile2]);

  return (
    <div className={styles.container}>
      <EditOptions
        file={file}
        file1={duplicateFile1}
        file2={duplicateFile2}
        onChangeFile1={setDuplicateFile1}
        onChangeFile2={setDuplicateFile2}
      />
      <div className={styles.subContainer}>
        <img
          src={imageUrl}
          alt="Uploaded Preview"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
        <Download file={duplicateFile2} />
      </div>
    </div>
  );
}
