import React, { useState } from "react";
import "app/app.scss";
import { Header } from "./header/header";

interface GlobalProps {}

export const App: React.FC<GlobalProps> = () => {
  const [isHeaderShown, setHeaderShown] = useState(true);
  return (
    <div className="app-container">
      <Header setHeaderShown={setHeaderShown} isHeaderShown={isHeaderShown} />
    </div>
  );
};
