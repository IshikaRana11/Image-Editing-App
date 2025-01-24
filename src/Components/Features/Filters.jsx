import React, { useState } from "react";
import styles from "./filter.module.css";
import { Jimp } from "jimp";
const Filters = ({ file1, file2, onChangeFile1, onChangeFile2 }) => {
  const filters = [
    { id: "vintage", name: "Vintage", emoji: "📷" },
    { id: "bw", name: "B&W", emoji: "⚫" },
    { id: "sepia", name: "Sepia", emoji: "🟤" },
    { id: "vivid", name: "Vivid", emoji: "🌈" },
    { id: "drama", name: "Drama", emoji: "🎭" },
    { id: "fade", name: "Fade", emoji: "🌫" },
  ];
  async function showFilter(OptionId) {
    let image = null;
    image = await Jimp.fromBuffer(file1);
    switch (OptionId) {
      case "vintage":
        image.filter(Jimp.MIME_PNG, Jimp.FILTER_GRAYSCALE);
        break;
      case "bw":
        break;
      case "sepia":
        break;
      case "vivid":
        break;
      case "drama":
        break;
      case "fade":
        break;
    }
    const buffer = await image.getBuffer("image/jpeg");
    onChangeFile2(buffer);
  }
  return (
    <div className={styles.container}>
      <ul className={styles.subOpt}>
        {filters.map((option) => (
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

export default Filters;
