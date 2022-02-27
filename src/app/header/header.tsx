import React from "react";
import "./header.scss";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <div className="header__logo">лена</div>
    </div>
  );
};
