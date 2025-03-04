import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Search from "./Pages/Search/Search.jsx";
import ThankYou from './Components/ThankYou.jsx'
const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/search/:query" element={<Search />} />
        <Route
          path="/search/:query/video/:categoryId/:videoId"
          element={<Video />}
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
};

export default App;
