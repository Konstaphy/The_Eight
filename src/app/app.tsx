import React, { useState } from "react";
import "app/app.scss";
import { Header } from "./header/header";
import { Content } from "./content/content";

interface GlobalProps {}

export const App: React.FC<GlobalProps> = () => {
  const [isHeaderShown, setHeaderShown] = useState(true);
  return (
    <div className="app-container">
      <Header setHeaderShown={setHeaderShown} isHeaderShown={isHeaderShown} />
      <Content />
    </div>
  );
};

//TODO: eslint settings
//TODO: рефакторинг всего этого драг-дерьма
//TODO: отображение картинки и ресет стейта
//TODO: милый текст и картинки
