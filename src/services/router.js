import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Links from "../pages/links";

export default function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}
