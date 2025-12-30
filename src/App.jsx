import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import MainLayout from "./layouts/MainLayout";
import Login from "./components/Login";
import Intro from "./components/Intro";
import Music from "./components/preview/Music";
import LoveLetter from "./components/preview/LoveLetter";
import Gallery from "./components/preview/Gallery";
import OurNote from "./components/preview/OurNote";
import Videos from "./components/preview/Videos";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 700,
  once: true,
  easing: "ease-in-out",
});

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />

        {/* صفحة الانترو */}
        <Route path="/intro" element={<Intro />} />

        {/* Main Layout */}
        <Route path="/main" element={<MainLayout />}>
          <Route path="music" element={<Music />} />
          <Route path="loveletter" element={<LoveLetter />} />
          <Route path="videos" element={<Videos />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="ournote" element={<OurNote />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
