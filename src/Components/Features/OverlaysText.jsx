import React, { useState } from "react";
import styles from "./subOpt.module.css";
const OverlaysText = () => {
  const [overlaysValues, setOverlaysValues] = useState({
    text: 0,
    stickers: 0,
    frames: 0,
    watermarks: 0,
    shapes: 0,
    speech: 0,
    emojis: 0,
    icons: 0,
  });
  const overlays = [
    { id: "text", name: "Add Text", emoji: "✍" },
    { id: "stickers", name: "Stickers", emoji: "🎯" },
    { id: "frames", name: "Frames", emoji: "🖼" },
    { id: "watermarks", name: "Watermarks", emoji: "©" },
    { id: "shapes", name: "Shapes", emoji: "⭐" },
    { id: "speech", name: "Speech Bubbles", emoji: "💭" },
    { id: "emojis", name: "Emojis", emoji: "😊" },
    { id: "icons", name: "Icons", emoji: "🔣" },
  ];
  const handleSliderChange = (id, e) => {
    setOverlaysValues((prev) => ({
      ...prev,
      [id]: parseFloat(e.target.value),
    }));
  };
  return (
    <div className={styles.container}>
      <ul className={styles.subOpt}>
        {overlays.map((option) => (
          <li key={option.id} className={styles.OptItem}>
            <span className={styles.emoji}>{option.emoji}</span>
            <span className={styles.name}>{option.name}</span>

            <input
              type="range"
              min="-1"
              max="1"
              step="0.1"
              value={overlaysValues[option.id]}
              onChange={(e) => handleSliderChange(option.id, e)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OverlaysText;
