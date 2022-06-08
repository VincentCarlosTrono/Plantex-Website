import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Products from "./Components/Products";
import Questions from "./Components/Questions";
import Faqs from "./Components/Faqs";
import Footer from "./Components/Footer";
import { DarkmodeContext } from "./DarkmodeContext";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      // mirror: true,
      offset: 120,
      duration: 2000,
    });
  }, []);
  const { darkmode } = useContext(DarkmodeContext);
  return (
    <div className={darkmode ? "dark" : "App"}>
      <Header />
      <Hero />
      <Feature />
      <About />
      <Products />
      <Questions />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
