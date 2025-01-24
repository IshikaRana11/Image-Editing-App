import Content from "./Components/Content/Content";
import Navbar from "./Components/Navbar/Navbar";
import ShowImg from "./Components/ImageView/ShowImg";
import { useState } from "react";
function App() {
  const [editFile, setEditFile] = useState(null);
  return (
    <>
      <Navbar />
      {editFile ? (
        <ShowImg file={editFile} />
      ) : (
        <Content onFileSubmit={setEditFile} />
      )}
    </>
  );
}

export default App;
