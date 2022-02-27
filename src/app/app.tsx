import React from "react";
import "app/app.scss";
import { Header } from "./header/header";

interface GlobalProps {}

export const App: React.FC<GlobalProps> = () => {
  return (
    <div className="app-container">
      <Header />
    </div>
  );
};
