import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Products from "./Components/Products";
import Questions from "./Components/Questions";
import Faqs from "./Components/Faqs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
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
