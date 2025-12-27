import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import WebDesign from "./sections/WebDesign";
import UiUxDesign from "./sections/UiUxDesign";
import AppDesign from "./sections/AppDesign";


function MainPage() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
<Route path="/web-design" element={<WebDesign />} />
<Route path="/ui-ux-design" element={<UiUxDesign />} />
<Route path="/app-design" element={<AppDesign />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
