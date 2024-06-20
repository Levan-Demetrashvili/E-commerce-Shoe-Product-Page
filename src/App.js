import React from "react";

import Header from "./components/Header";
import Slider from "./components/Slider/Slider";
import Content from "./components/Content";
import CartButtons from "./components/CartButtons";

export default function App() {
  return (
    <div className='app'>
      <Header />
      <Slider />
      <Content />
      <CartButtons />
    </div>
  );
}
