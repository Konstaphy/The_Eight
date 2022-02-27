import React, { useEffect, useState } from "react";
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
    config: config.molasses,
  });
  return (
    <div className="header-wrapper">
      <animated.div style={st} className="header">
        <div className="header__logo">С 8 марта!</div>
      </animated.div>
    </div>
  );
};
