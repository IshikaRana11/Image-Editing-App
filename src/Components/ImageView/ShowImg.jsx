import React, { useState, useEffect } from "react";
import EditOptions from "../EditOptions/EditOptions";

export default function ShowImg({ file, onChangeFile }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (file instanceof File) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      return () => URL.revokeObjectURL(url);
    } else if (typeof file === "string") {
      setImageUrl(file);
    } else if (file.url) {
      setImageUrl(file.url);
    }
  }, [file]);

  return (
    <div>
      <img
        src={imageUrl}
        alt="Uploaded Preview"
        className="max-w-full h-auto rounded-lg shadow-md"
      />
      <EditOptions file={file} onChangeFile={onChangeFile} />
    </div>
  );
}
