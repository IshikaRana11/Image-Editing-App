import React, { useState } from "react";
import styles from "./EditOptions.module.css";
import Adjust from "../Features/Adjust";
import Transform from "../Features/Transform";
import Filters from "../Features/Filters";
import Effects from "../Features/Effects";
import OverlaysText from "../Features/OverlaysText";

export default function EditOptions({ file }) {
  const [hoveredItems, setHoveredItems] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const options = [
    { id: "adjust", name: "Adjust", emoji: "🎚️" },
    { id: "transform", name: "Transform", emoji: "🔄" },
    { id: "filters", name: "Filter", emoji: "🎨" },
    { id: "effects", name: "Effects", emoji: "✨" },
    { id: "overlays", name: "Text & Overlays", emoji: "📝" },
  ];

  function getCategoryId() {
    switch (selectedCategory) {
      case "adjust":
        return <Adjust />;
      case "transform":
        return <Transform />;
      case "filters":
        return <Filters />;
      case "effects":
        return <Effects />;
      case "overlays":
        return <OverlaysText />;
      default:
        return [];
    }
  }
  function handleOptionClick(id) {
    setSelectedCategory(id);
  }
  return (
    <div>
      <ul className={styles.imageList}>
        {options.map((option) => (
          <li
            key={option.id}
            className={styles.imageItem}
            onMouseEnter={() => setHoveredItems(option.id)}
            onMouseLeave={() => setHoveredItems(null)}
          >
            <span
              className={styles.emoji}
              onClick={() => handleOptionClick(option.id)}
            >
              {option.emoji}
            </span>
            {hoveredItems === option.id && (
              <div className={styles.overlay}>{option.name}</div>
            )}
          </li>
        ))}
      </ul>
      {selectedCategory && getCategoryId()}
    </div>
  );
}
