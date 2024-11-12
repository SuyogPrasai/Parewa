import React from 'react';
import logo from '../imgs/parewa_noBackground.png';

// Navigation items component with hover animation
const NavItem = ({ href, children }) => (
  <li className="relative">
    <a
      className="text-gray-900 text-base font-medium relative group"
      href={href}
    >
      {children}
      {/* Hover line animation */}
      <span className="absolute left-0 bottom-[-5px] w-0 h-[3px] bg-blue-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </a>
  </li>
);

// Action button component with hover effect
const ActionButton = ({ href, text, bgColor, textColor }) => (
  <a
    href={href}
    className={`${bgColor} ${textColor} rounded-md border-2 border-transparent px-5 py-2.5 text-sm font-medium shadow transition duration-300 ease-in-out hover:bg-transparent hover:border-blue-500 hover:text-blue-500`}
  >
    {text}
  </a>
);

const Header = () => (
  <header className="bg-white h-[7rem] select-none sticky top-0 z-50 shadow-md">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-full">
      <div className="flex h-full items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <a href="#" className="block">
            <span className="sr-only">Home</span>
            <img src={logo} alt="Logo" className="h-24" />
          </a>
          <span className="text-3xl font-semibold text-primary font-roboto">परेवा</span>
        </div>

        {/* Navigation and Buttons */}
        <div className="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-8">
              <NavItem href="#">About</NavItem>
              <NavItem href="#">Fill In</NavItem>
              <NavItem href="#">History</NavItem>
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <ActionButton
                href="#"
                text="Submit Notice"
                bgColor="bg-blue-500"
                textColor="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
