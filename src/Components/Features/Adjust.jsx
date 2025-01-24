import React, { useState } from "react";
import styles from "./subOpt.module.css";
import { Jimp } from "jimp";

const Adjust = ({ file1, file2, onChangeFile1, onChangeFile2 }) => {
  const [prevId, setPrevId] = useState(null);
  const adjust = [
    { id: "brightness", name: "Brightness", emoji: "☀" },
    { id: "contrast", name: "Contrast", emoji: "🌓" },
    { id: "saturation", name: "Saturation", emoji: "🎨" },
    { id: "temperature", name: "Temperature", emoji: "🌡" },
    { id: "sharpness", name: "Sharpness", emoji: "✨" },
    { id: "exposure", name: "Exposure", emoji: "💡" },
    { id: "highlights", name: "Highlights", emoji: "⚪" },
    { id: "shadows", name: "Shadows", emoji: "⚫" },
  ];

  const handleSliderChange = (id, e) => {
    setAdjustValues((prev) => ({
      ...prev,
      [id]: parseFloat(e.target.value),
    }));
  };
  async function editCurrImg(optionId, val) {
    let image = null;
    if (prevId != optionId) {
      onChangeFile1(file2);
      setPrevId(optionId);
      image = await Jimp.fromBuffer(file2);
    } else {
      image = await Jimp.fromBuffer(file1);
    }
    switch (optionId) {
      case "brightness":
        image.brightness(val / 25);
        break;
      case "contrast":
        image.contrast((val - 50) / 50);
        break;
      case "saturation":
        image.color([{ apply: "saturate", params: [val] }]);
        break;
      case "temperature":
        break;
      case "sharpness":
        break;
      case "exposure":
        break;
      case "highlights":
        break;
      case "shadow":
        image.color([{ apply: "tint", params: [val] }]);
        break;
    }
    const buffer = await image.getBuffer("image/jpeg");
    onChangeFile2(buffer);
  }
  return (
    <div className={styles.container}>
      <ul className={styles.subOpt}>
        {adjust.map((option) => (
          <li key={option.id} className={styles.OptItem}>
            <span className={styles.emoji}>{option.emoji}</span>
            <span className={styles.name}>{option.name}</span>

            <input
              type="range"
              min="0"
              max="100"
              step="5"
              onChange={async (e) => {
                const val = parseFloat(e.target.value);
                editCurrImg(option.id, val);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Adjust;
