import React from "react";
import "./picture.scss";
import test from "assets/test.jpg";
import { animated, config, useSpring } from "react-spring";

interface PictureProps {
  setPictureShown: (isPictureShown: boolean) => void;
}

export const Picture: React.FC<PictureProps> = (props) => {
  const stopProp = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const st = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
    delay: 1000,
  });

  return (
    <div className="picture-background" onClick={() => props.setPictureShown(false)}>
      <div className="picture" onClick={stopProp}>
        <animated.img style={st} src={test} alt="test" />
        <h3 className="picture__description">Нажми на фон чтобы начать заного!</h3>
      </div>
    </div>
  );
};
