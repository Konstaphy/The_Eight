import React from "react";
import "./modal.scss";
import { animated, config, useSpring } from "react-spring";

interface HeaderProps {
  setModalShown: (isHeaderShown: boolean) => void;
  isModalShown: boolean;
}

export const Modal: React.FC<HeaderProps> = (props) => {
  const st = useSpring({
    to: { opacity: 1 },
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
    <div className="header-wrapper" onClick={() => props.setModalShown(false)}>
      <animated.div style={st} className="header" onClick={(e) => stopProp(e)}>
        <div className="header__logo">С 8 марта!</div>
      </animated.div>
    </div>
  );
};
