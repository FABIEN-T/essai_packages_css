import React, { useCallback } from "react";
import "../index.css";
import "./button.css";

export const Button = () => {
  const onClick = useCallback(() => {
    console.log("Vite + React + TypeScript + Tailwind = ❤️");
  }, []);

  return (
    <button
      onClick={onClick}
      className="bgbtn mybutton"
    >
      Vite is better than Webpack
    </button>
  );
};
