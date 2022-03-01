import React, { useState } from "react";
import "app/app.scss";
import { Modal } from "./modal/modal";
import { Content } from "./content/content";
import { Picture } from "./picture/picture";

interface GlobalProps {}

export const App: React.FC<GlobalProps> = () => {
  const [isModalShown, setModalShown] = useState(true);
  const [isPictureShown, setPictureShown] = useState(false);
  if (isPictureShown) return <Picture setPictureShown={setPictureShown} />;
  if (!isModalShown) {
    return (
      <div className="app-container">
        <Content setPictureShown={setPictureShown} />
      </div>
    );
  }
  return (
    <div className="app-container">
      <Modal setModalShown={setModalShown} isModalShown={isModalShown} />
    </div>
  );
};
