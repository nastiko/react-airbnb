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
      <Cards />
  </div>
);
