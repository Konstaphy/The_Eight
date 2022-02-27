import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <div className="header__logo">ЛОГО</div>
    </div>
  );
};

export default Header;
