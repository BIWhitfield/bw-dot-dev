import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "../home/Home";
import AudioPlayback from "../audioPlayback/AudioPlayback";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/audio" element={<AudioPlayback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
