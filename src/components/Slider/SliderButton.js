import React from "react";

export default function SliderButton({ children, onClick, id }) {
  return (
    <button id={id} onClick={onClick}>
      {children}
    </button>
  );
}
