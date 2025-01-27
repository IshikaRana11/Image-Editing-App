import React, { useState, useEffect, useRef } from "react";
import EditOptions from "../EditOptions/EditOptions";
import { Jimp } from "jimp";
import Download from "../DownloadImg/Download";
import styles from "./ShowImg.module.css";
import Button from "react-bootstrap/Button";
export default function ShowImg({ file }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [duplicateFile1, setDuplicateFile1] = useState(file);
  const [duplicateFile2, setDuplicateFile2] = useState(file);
  const [key, setKey] = useState();
  const adjustRef = useRef(null);
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
        file1={duplicateFile1}
        file2={duplicateFile2}
        onChangeFile1={setDuplicateFile1}
        onChangeFile2={setDuplicateFile2}
        ref={adjustRef}
      />
      <div className={styles.subContainer}>
        <img
          src={imageUrl}
          alt="Uploaded Preview"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
        <div className="mt-3">
          <Download file={duplicateFile2} />
          <Button
            type="reset"
            style={{
              backgroundColor: "rgb(232, 230, 226)",
              color: "black",
              fontWeight: "bold",
              width: "200px",
              marginLeft: "40px",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "rgb(139, 138, 138)")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "rgb(232, 230, 226)")
            }
            onClick={() => {
              setDuplicateFile1(file);
              setDuplicateFile2(file);
              adjustRef.current.setSliderValues({
                brighten: 50,
                contrast: 50,
                tint: 0,
                posterize: 0,
                blur: 0,
                red: 50,
                green: 50,
                blue: 50,
              });
            }}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
