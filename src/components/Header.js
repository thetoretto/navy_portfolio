import React from "react";

//images
import logo1 from "../assets/logo1.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="home">
            <img src={logo1} alt="" />
          </a>
          <button href="Contact" className="btn btn-sm">
            work with me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
