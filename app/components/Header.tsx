import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white font-serif font-semibold  p-3 shadow-lg ">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl  underline hover:text-gray-500  tracking-wide">Rentify</h1>
        <ul className="flex space-x-8">
          <li><a href="#home" className="hover:text-gray-500  hover:underline transition duration-300">Home</a></li>
          <li><a href="#properties" className="hover:text-gray-500 hover:underline transition duration-300">Properties</a></li>
          <li><a href="#about" className="hover:text-gray-500 hover:underline transition duration-300">About Us</a></li>
          <li><a href="#contact" className="hover:text-gray-500 hover:underline transition duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;