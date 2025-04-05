import React from 'react';

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-6">
      <div className="text-sm text-gray-500 font-normal mb-2">
        <span>E-mail:&nbsp;</span>
        <a
          href="mailto:vool34@gmail.com"
          className="text-gray-500 hover:text-gray-200 transition duration-150 ease-in-out"
        >
          vool34@gmail.com
        </a>
      </div>
      <div className="text-sm text-gray-500 font-normal mb-2">
        <span>GIT:&nbsp;</span>
        <a
          href="https://github.com/corbenykt"
          className="text-gray-500 hover:text-gray-100 transition duration-150 ease-in-out"
        >
          https://github.com/corbenykt
        </a>
      </div>
      <div className="text-sm text-gray-500 font-normal mb-2">
        <span>LinkedIn:&nbsp;</span>
        <a
          href="https://www.linkedin.com/in/dmitrii-artemev/"
          className="text-gray-500 hover:text-gray-100 transition duration-150 ease-in-out"
        >
          Dmitrii Artemev
        </a>
      </div>
    </footer>
  );
}

export default Footer;
