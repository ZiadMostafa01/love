import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Intro from "./components/Intro";
import MainLayout from "./components/MainLayout";
import Note from "./components/Note";
import Music from "./components/Music";
import LoveLetter from "./components/LoveLetter";
import Gallery from "./components/Gallery";
import OurNote from "./components/OurNote";

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
          <Route path="loveletter" element={<LoveLetter />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="ournote" element={<OurNote />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
