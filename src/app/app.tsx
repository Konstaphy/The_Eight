import React, { useState } from "react";
import "app/app.scss";
import { Modal } from "./modal/modal";
import { Content } from "./content/content";

interface GlobalProps {}

export const App: React.FC<GlobalProps> = () => {
  const [isModalShown, setModalShown] = useState(true);
  if (!isModalShown)
    return (
      <div className="app-container">
        <Content />
      </div>
    );
  return (
    <div className="app-container">
      <Modal setModalShown={setModalShown} isModalShown={isModalShown} />
    </div>
  );
};

//TODO: отображение картинки и ресет стейта
//TODO: милый текст и картинки
