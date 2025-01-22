import React, { useState } from "react";
import styles from "./subOpt.module.css";
const Transform = () => {
  const [transformValues, setTransformValues] = useState({
    crop: 0,
    rotate: 0,
    fliph: 0,
    flipv: 0,
    skew: 0,
    perspective: 0,
    aspectRatio: 0,
    straighten: 0,
  });
  const transform = [
    { id: "crop", name: "Crop", emoji: "✂" },
    { id: "rotate", name: "Rotate", emoji: "🔄" },
    { id: "fliph", name: "Flip Horizontal", emoji: "↔" },
    { id: "flipv", name: "Flip Vertical", emoji: "↕" },
    { id: "skew", name: "Skew", emoji: "⟿" },
    { id: "perspective", name: "Perspective", emoji: "📐" },
    { id: "aspectRatio", name: "Aspect Ratio", emoji: "📏" },
    { id: "straighten", name: "Straighten", emoji: "📍" },
  ];
  const handleSliderChange = (id, e) => {
    setTransformValues((prev) => ({
      ...prev,
      [id]: parseFloat(e.target.value),
    }));
  };
  return (
    <div className={styles.container}>
      <ul className={styles.subOpt}>
        {transform.map((option) => (
          <li key={option.id} className={styles.OptItem}>
            <span className={styles.emoji}>{option.emoji}</span>
            <span className={styles.name}>{option.name}</span>

            <input
              type="range"
              min="-1"
              max="1"
              step="0.1"
              value={transformValues[option.id]}
              onChange={(e) => handleSliderChange(option.id, e)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transform;
