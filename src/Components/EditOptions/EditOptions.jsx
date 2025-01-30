import React, { useState } from 'react';
import styles from './EditOptions.module.css';
import Adjust from '../Features/Adjust';
import Transform from '../Features/Transform';
import Filters from '../Features/Filters';
import Effects from '../Features/Effects';
import OverlaysText from '../Features/OverlaysText';
import Button from 'react-bootstrap/Button';

export default function EditOptions({
  file1,
  file2,
  onChangeFile1,
  onChangeFile2,
}) {
  const [hoveredItems, setHoveredItems] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('adjust');
  const options = [
    { id: 'adjust', name: 'Adjust', emoji: '🎚️' },
    { id: 'filters', name: 'Filter', emoji: '🎨' },
    { id: 'transform', name: 'Transform', emoji: '🔄' },
    { id: 'effects', name: 'Effects', emoji: '✨' },
    { id: 'overlays', name: 'Text & Overlays', emoji: '📝' },
  ];

  function getCategoryId() {
    switch (selectedCategory) {
      case 'adjust':
        return (
          <Adjust
            file1={file1}
            file2={file2}
            onChangeFile1={onChangeFile1}
            onChangeFile2={onChangeFile2}
          />
        );
      case 'transform':
        return (
          <Transform
            file1={file1}
            file2={file2}
            onChangeFile1={onChangeFile1}
            onChangeFile2={onChangeFile2}
          />
        );
      case 'filters':
        return (
          <Filters
            file1={file1}
            file2={file2}
            onChangeFile1={onChangeFile1}
            onChangeFile2={onChangeFile2}
          />
        );
      case 'effects':
        return (
          <Effects
            file1={file1}
            file2={file2}
            onChangeFile1={onChangeFile1}
            onChangeFile2={onChangeFile2}
          />
        );
      case 'overlays':
        return (
          <OverlaysText
            file1={file1}
            file2={file2}
            onChangeFile1={onChangeFile1}
            onChangeFile2={onChangeFile2}
          />
        );
      default:
        return [];
    }
  }
  function handleOptionClick(id) {
    setSelectedCategory(id);
  }
  return (
    <div
      style={{
        overflowY: 'scroll',
        height: '80vh',
        margin: '20px',
        padding: '20px',
      }}
    >
      <ul className={styles.imageList}>
        {options.map(option => (
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
