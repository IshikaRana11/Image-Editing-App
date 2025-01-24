import React, { useState } from "react";
import styles from "./filter.module.css";
const Transform = () => {
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
  return (
    <div className={styles.container}>
      <ul className={styles.subOpt}>
        {transform.map((option) => (
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

export default Transform;
