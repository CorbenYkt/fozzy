import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full py-2 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="text-sm">
          <h6 className="text-gray-500 font-normal">E-mail:&nbsp;<a href="mailto:vool34@gmail.com" className="text-gray-500 hover:text-gray-200 transition duration-150 ease-in-out">vool34@gmail.com</a></h6>
        </div>
        <div className="text-sm">
          <h6 className="text-gray-500 font-normal">GIT:&nbsp;<a href="https://github.com/corbenykt" className="text-gray-500 hover:text-gray-100 transition duration-150 ease-in-out">https://github.com/corbenykt</a></h6>
        </div>
        <div className="text-sm">
          <div className="text-gray-500 font-normal">LinkedIn:&nbsp;<a href="https://www.linkedin.com/in/dmitrii-artemev/" className="text-gray-500 hover:text-gray-100 transition duration-150 ease-in-out">Dmitrii Artemev</a></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;