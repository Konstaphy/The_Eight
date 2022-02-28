import React from "react";
import "./picture.scss";
import test from "assets/test.jpg";

interface PictureProps {
  setPictureShown: (isPictureShown: boolean) => void;
}

export const Picture: React.FC<PictureProps> = (props) => {
  const stopProp = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div className="picture-background" onClick={() => props.setPictureShown(false)}>
      <div className="picture" onClick={stopProp}>
        <img src={test} alt="test" />
      </div>
    </div>
  );
};
