import React, { useEffect } from "react";
import "./header.scss";

interface HeaderProps {
  setHeaderShown: (isHeaderShown: boolean) => void;
  isHeaderShown: boolean;
}

export const Header: React.FC<HeaderProps> = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.setHeaderShown(false);
    }, 5000);
  }, []);
  if (props.isHeaderShown)
    return (
      <div className="header">
        <div className="header__logo">С 8 марта!</div>
      </div>
    );
  return <></>;
};
