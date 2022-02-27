import React from "react";
import "./content.scss";
import { config, useSpring, animated } from "react-spring";

export const Content = () => {
  const st = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
    delay: 1200,
  });
  return (
    <animated.main style={st} className="content">
      Content
    </animated.main>
  );
};
