import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Intro from "./components/Intro";
import MainLayout from "./components/MainLayout";
import Note from "./components/Note";
import Music from "./components/Music";
import LoveLetter from "./components/LoveLetter";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />

        {/* صفحة الانترو */}
        <Route path="/intro" element={<Intro />} />

        {/* Main Layout */}
        <Route path="/main" element={<MainLayout />}>
          <Route path="note" element={<Note />} />
          <Route path="music" element={<Music />} />
          <Route path="love" element={<LoveLetter />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
