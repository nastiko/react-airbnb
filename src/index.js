import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import SectionImgs from "./components/SectionImgs";
import Cards from "./components/Cards";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <Header />
      <SectionImgs />
      <Cards
          img = "athlete.png"
          rating = {5.0}
          reviewCount = {6}
          country = "UK"
          title = {"Life Lessons with Katie Zaferes"}
          price = {136}

      />
  </div>
);
