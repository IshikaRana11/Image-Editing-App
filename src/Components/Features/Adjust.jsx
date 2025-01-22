import React, { useState } from "react";
import styles from "./subOpt.module.css";

const Adjust = () => {
  const [adjustValues, setAdjustValues] = useState({
    brightness: 0,
    contrast: 0,
    saturation: 0,
    temperature: 0,
    sharpness: 0,
    exposure: 0,
    highlights: 0,
    shadows: 0,
  });
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
  return (
    <div className={styles.container}>
      <ul className={styles.subOpt}>
        {adjust.map((option) => (
          <li key={option.id} className={styles.OptItem}>
            <span className={styles.emoji}>{option.emoji}</span>
            <span className={styles.name}>{option.name}</span>

            <input
              type="range"
              min="-1"
              max="1"
              step="0.1"
              value={adjustValues[option.id]}
              onChange={(e) => handleSliderChange(option.id, e)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Adjust;
