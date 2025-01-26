import React, { useEffect, useState } from "react";
import styles from "./subOpt.module.css";
import { Jimp } from "jimp";

const Adjust = ({ file1, file2, onChangeFile1, onChangeFile2 }) => {
  const [sliderValues, setSliderValues] = useState({
    brighten: 50,
    contrast: 50,
    tint: 0,
    posterize: 0,
    blur: 0,
    red: 50,
    green: 50,
    blue: 50,
    // lighten: 0,
    // darken: 0,
  });
  const adjust = [
    { id: "brighten", name: "Brightness", emoji: "☀" },
    { id: "contrast", name: "Contrast", emoji: "🎨" },
    { id: "posterize", name: "Posterize", emoji: "🎭" },
    { id: "blur", name: "Blur", emoji: "🎭" },
    { id: "red", name: "Temperature", emoji: "🌡" },
    { id: "tint", name: "Tint", emoji: "✨" },
    { id: "green", name: "Green", emoji: "" },
    { id: "blue", name: "Blue", emoji: "" },
    // { id: "lighten", name: "Lighten", emoji: "⚪" },
    // { id: "darken", name: "Darken", emoji: "⚫" },
  ];

  async function editCurrImg() {
    const features = [];
    let image = await Jimp.fromBuffer(file1);
    image.brightness(sliderValues.brighten / 50);
    image.contrast((sliderValues.contrast - 50) / 50);
    image.color([{ apply: "tint", params: [sliderValues.tint / 5] }]);
    image.posterize(((sliderValues.posterize - 50) * -1 + 50) / 6);
    const v = sliderValues.blur / 5;
    if (v >= 1) image.blur(v);

    image.color([
      { apply: "red", params: [sliderValues.red * 5.1 - 255] },
      { apply: "green", params: [sliderValues.green * 5.1 - 255] },
      { apply: "blue", params: [sliderValues.blue * 5.1 - 255] },
    ]);
    const img = await image.getBuffer("image/jpeg");
    onChangeFile2(img);
  }
  useEffect(() => {
    editCurrImg();
  }, [sliderValues]);

  return (
    <div className={styles.container}>
      <ul className={styles.subOpt}>
        {adjust.map((option) => (
          <li key={option.id} className={styles.OptItem}>
            <span className={styles.emoji}>{option.emoji}</span>
            <span className={styles.name}>{option.name}</span>

            <input
              className={styles.slider}
              type="range"
              min="0"
              max="100"
              step="1"
              onChange={(e) => {
                const cpy = {
                  ...sliderValues,
                  [option.id]: parseFloat(e.target.value),
                };
                setSliderValues(cpy);
              }}
              value={sliderValues[option.id]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Adjust;
