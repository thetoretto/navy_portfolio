import React from "react";

//images
import logo1 from "../assets/logo1.png";

const Footer = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <h2 className="text-accent font-primary font-bold ">
            all rights reseverd{" "}
          </h2>
          <h2> its all love </h2>
        </div>
      </div>
    </header>
  );
};

export default Footer;
