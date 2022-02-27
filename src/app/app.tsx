import React from "react";
import "app/app.scss";

interface GlobalProps {}

export const App: React.FC<GlobalProps> = () => {
  return <div className="app-container">Hello world</div>;
};
