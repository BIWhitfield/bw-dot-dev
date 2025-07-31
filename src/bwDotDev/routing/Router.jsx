import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "../home/Home";
import AudioPlayback from "../audioPlayback/AudioPlayback";

const _router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/audio" element={<AudioPlayback />} />
    </>
  )
);

function Router() {
  return <RouterProvider router={_router} />;
}

export default Router;
