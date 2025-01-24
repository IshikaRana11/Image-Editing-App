import React, { useState } from "react";
import styles from "./filter.module.css";
const OverlaysText = () => {
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

  return (
    <div className={styles.container}>
      <ul className={styles.subOpt}>
        {overlays.map((option) => (
          <li key={option.id} className={styles.OptItem}>
            <button onClick={() => showFilter(option.id)}>
              <span className={styles.emoji}>{option.emoji}</span>
              <span className={styles.name}>{option.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OverlaysText;
