import React, { useState } from 'react';
import styles from './filter.module.css';
import { Jimp } from 'jimp';
const Filters = ({ file1, file2, onChangeFile1, onChangeFile2 }) => {
  const [selectedItm, setSelectedItem] = useState(null);
  const filters = [
    { id: 'sepia', name: 'Sepia', emoji: '📷' },
    { id: 'dither', name: 'Dither', emoji: '⚫' },
    { id: 'gaussianBlur', name: 'GaussianBlur', emoji: '🟤' },
    { id: 'greyscale', name: 'Greyscale', emoji: '🟤' },
    { id: 'embossed', name: 'Embossed', emoji: '🌈' },
    { id: 'fisheye', name: 'Fisheye', emoji: '🌫' },
    { id: 'invert', name: 'Invert', emoji: '🌫' },
    { id: 'ghost', name: 'Ghost', emoji: '🎭' },
  ];
  async function showFilter(optionId) {
    let image = file1.clone();
    if (optionId === 'fisheye') image.fisheye({ radius: 2 });
    else if (optionId === 'gaussianBlur') image.gaussian(1);
    else if (optionId === 'embossed')
      image.convolute([
        [-2, -1, 0],
        [-1, 1, 1],
        [0, 1, 2],
      ]);
    else if (optionId === 'ghost') {
      let image2 = image.clone();
      image.composite(image2, 5, 0, {
        mode: Jimp.BLEND_MULTIPLY,
        opacitySource: 0.5,
        opacityDest: 0.9,
      });
    } else if (optionId === 'sepia') image.sepia();
    else if (optionId === 'dither') image.dither();
    else if (optionId === 'greyscale') image.greyscale();
    else if (optionId === 'invert') image.invert();
    onChangeFile2(image);
  }
  return (
    <div className={styles.container}>
      <ul className={styles.subOpt}>
        {filters.map(option => (
          <li key={option.id} className={styles.OptItem}>
            <button
              onClick={() => {
                showFilter(option.id);
                setSelectedItem(option.id);
              }}
              style={
                selectedItm == option.id ? { backgroundColor: '#9f9d9d' } : null
              }
            >
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
