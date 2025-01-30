import styles from './Content.module.css';
import React, { useRef, useState } from 'react';
import { Jimp, ResizeStrategy } from 'jimp';

export default function FileUpload({ onFileSubmit }) {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className={styles.imgUpload}>
      <button
        onClick={async () => {
          const image = await Jimp.fromBuffer(await selectedFile.arrayBuffer());
          if (image.width > 1000) {
            image.resize({ w: 1000, mode: ResizeStrategy.BICUBIC });
          }
          if (image.height > 800) {
            image.resize({ h: 800, mode: ResizeStrategy.BICUBIC });
          }
          onFileSubmit(image);
        }}
        className={styles.uploadButton}
        disabled={selectedFile ? false : true}
      >
        Start Editing
      </button>
      <input
        type='file'
        accept='image/*'
        onChange={e => setSelectedFile(e.target.files[0])}
      />
    </div>
  );
}
