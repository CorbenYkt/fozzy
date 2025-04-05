import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className="flex items-center justify-center">
      <Link onClick={() => {
        const element = document.getElementById("mesection");
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }} className="font-medium text-gray-700 hover:text-gray-500 px-4 py-3 flex items-center transition duration-150 ease-in-out">Me</Link>
      <Link onClick={() => {
        const element = document.getElementById("myfamilysection");
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }} className="font-medium text-gray-700 hover:text-gray-500 px-4 py-3 flex items-center transition duration-150 ease-in-out">My Family</Link>

    </div>

  );
}

export default Header;
