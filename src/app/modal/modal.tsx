import React from "react";
import "./modal.scss";
import congratulationText from "./congratulations.json";
import { animated, config, useSpring } from "react-spring";
import videoCover from "assets/pexels-sami-aksu-10207542.mp4";

interface HeaderProps {
  setModalShown: (isHeaderShown: boolean) => void;
  isModalShown: boolean;
}

export const Modal: React.FC<HeaderProps> = (props) => {
  const st = useSpring({
    to: { opacity: 0.99 },
    from: { opacity: 0 },
    config: config.slow,
    delay: 500,
  });

  const stopProp = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  if (!props.isModalShown) return <></>;

  return (
    <div className="modal-wrapper" onClick={() => props.setModalShown(false)}>
      <animated.div style={st} className="modal">
        <p className="modal__logo">С 8 марта!</p>
        <div className="modal__text" onClick={(e) => stopProp(e)}>
          <video className="modal-video" autoPlay loop muted>
            <source src={videoCover} type="video/mp4" />
          </video>
          <p>{congratulationText.text}</p>
          <p className="modal__context">With love, Konstantine Fedotovskih</p>
        </div>
        <div className="modal__description">
          <p>Чтобы продолжить нажми на фон и выполни небольшое задание!</p>
          <p className="modal__extra">Задание можно выполнять хоть сколько раз.</p>
        </div>
      </animated.div>
    </div>
  );
};
