import React from "react";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  return (
    <div className="bg-gray-900 flex justify-between items-center pb-5">

      <h1 className="text-white text-2xl font-bold px-4">Rick And Morty</h1>


      <LanguageSelector />
    </div>
  );
};

export default Navbar;
