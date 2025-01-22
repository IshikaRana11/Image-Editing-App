import React, { useState } from "react";
import styles from "./subOpt.module.css";
const Effects = () => {
  const [effectValues, setEffectValues] = useState({
    blur: 0,
    shadow: 0,
    glow: 0,
    glitch: 0,
    noise: 0,
    mirror: 0,
  });
  const effects = [
    { id: "blur", name: "Blur", emoji: "🌊" },
    { id: "shadow", name: "Shadow", emoji: "👥" },
    { id: "glow", name: "Glow", emoji: "💫" },
    { id: "glitch", name: "Glitch", emoji: "⚡" },
    { id: "noise", name: "Noise", emoji: "📺" },
    { id: "mirror", name: "Mirror", emoji: "🪞" },
  ];
  const handleSliderChange = (id, e) => {
    setEffectValues((prev) => ({
      ...prev,
      [id]: parseFloat(e.target.value),
    }));
  };
  return (
    <div className={styles.container}>
      <ul className={styles.subOpt}>
        {effects.map((option) => (
          <li key={option.id} className={styles.OptItem}>
            <span className={styles.emoji}>{option.emoji}</span>
            <span className={styles.name}>{option.name}</span>

            <input
              type="range"
              min="-1"
              max="1"
              step="0.1"
              value={effectValues[option.id]}
              onChange={(e) => handleSliderChange(option.id, e)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Effects;
