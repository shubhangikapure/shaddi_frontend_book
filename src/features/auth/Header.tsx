import React from "react";
import logo from "../../assets/images/logo.png";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <img src={logo} alt="Logo" className="h-12" />
      <nav>
        <a
          href="#"
          className="text-gray-500 text-lg font-medium hover:text-purple-600"
        >
          About Us
        </a>
      </nav>
    </header>
  );
};

export default Header;
