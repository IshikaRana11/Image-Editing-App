import React, { useState } from "react";
import styles from "./subOpt.module.css";
const Filters = () => {
  const [filterValues, setFilterValues] = useState({
    vintage: 0,
    bw: 0,
    sepia: 0,
    vivid: 0,
    drama: 0,
    fade: 0,
  });
  const filters = [
    { id: "vintage", name: "Vintage", emoji: "📷" },
    { id: "bw", name: "B&W", emoji: "⚫" },
    { id: "sepia", name: "Sepia", emoji: "🟤" },
    { id: "vivid", name: "Vivid", emoji: "🌈" },
    { id: "drama", name: "Drama", emoji: "🎭" },
    { id: "fade", name: "Fade", emoji: "🌫" },
  ];
  const handleSliderChange = (id, e) => {
    setFilterValues((prev) => ({
      ...prev,
      [id]: parseFloat(e.target.value),
    }));
  };
  return (
    <div className={styles.container}>
      <ul className={styles.subOpt}>
        {filters.map((option) => (
          <li key={option.id} className={styles.OptItem}>
            <span className={styles.emoji}>{option.emoji}</span>
            <span className={styles.name}>{option.name}</span>
            <input
              type="range"
              min="-1"
              max="1"
              step="0.1"
              value={filterValues[option.id]}
              onChange={(e) => handleSliderChange(option.id, e)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
