import React from "react";
import "./header.scss";
import { useSpring, animated, config } from "react-spring";

interface HeaderProps {
  setHeaderShown: (isHeaderShown: boolean) => void;
  isHeaderShown: boolean;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const st = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.slow,
    delay: 1000,
  });

  const stopProp = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  if (!props.isHeaderShown) return <></>;

  return (
    <div className="header-wrapper" onClick={() => props.setHeaderShown(false)}>
      <animated.div style={st} className="header" onClick={(e) => stopProp(e)}>
        <div className="header__logo">С 8 марта!</div>
      </animated.div>
    </div>
  );
};
