import React, { useState } from 'react';
import logo from '../imgs/parewa_noBackground.png';
import Sidebar from './Sidebar';

const NavItem = ({ href, children, onClick }) => (
  <li className="relative" onClick={onClick}>
    <a className="text-gray-900 text-base font-medium relative group" href={href}>
      {children}
      <span className="absolute left-0 bottom-[-5px] w-0 h-[3px] bg-blue-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </a>
  </li>
);

const ActionButton = ({ href, text, bgColor, textColor }) => (
  <a
    href={href}
    target="_blank" // To open in a new tab (optional)
    rel="noopener noreferrer" // For security purposes when opening a new tab
    className={`${bgColor} ${textColor} rounded-md border-2 border-transparent px-5 py-2.5 text-sm font-medium shadow transition duration-300 ease-in-out hover:bg-transparent hover:border-blue-500 hover:text-blue-500`}
  >
    {text}
  </a>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: '#email', text: 'NewsLetter' },
    { href: '#info', text: 'About' },
    { href: '#', text: 'Contributors' },
  ];

  return (
    <header className="bg-white h-[7rem] select-none sticky top-0 z-50 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="block">
              <span className="sr-only">Home</span>
              <img src={logo} alt="Logo" className="h-24" />
            </a>
            <span className="text-3xl font-semibold text-primary font-roboto">परेवा</span>
          </div>

          {/* Animated Hamburger Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex flex-col items-center justify-center space-y-[6px] focus:outline-none z-50"
            >
              <div
                className={`w-full h-[2px] bg-gray-900 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[8px] w-[70%]' : 'rotate-0 w-full'}`}
              />
              <div
                className={`w-full h-[2px] bg-gray-900 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <div
                className={`w-full h-[2px] bg-gray-900 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[8px] w-[70%]' : 'rotate-0 w-full'}`}
              />
            </button>
          </div>

          {/* Desktop Navigation and Action Button */}
          <div className="hidden lg:flex lg:items-center lg:gap-12">
            <nav aria-label="Global" className="block">
              <ul className="flex items-center gap-8">
                {navItems.map((item, index) => (
                  <NavItem href={item.href} onClick={toggleMenu} key={index}>
                    {item.text}
                  </NavItem>
                ))}
              </ul>
            </nav>

            {/* Submit Notice button in desktop view */}
            <ActionButton
              href="https://docs.google.com/forms/d/1jJwE0RdrXI9pR9ee4DN9M0NL0OqcPCJuai2hZJ_zfw4/viewform?edit_requested=true"
              text="Submit Notice"
              bgColor="bg-blue-500"
              textColor="text-white"
            />
          </div>
        </div>
      </div>

      {/* Sidebar Menu Overlay for mobile view */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex flex-col items-center justify-center bg-white bg-opacity-80 p-4">
          {/* Navigation Links */}
          <nav aria-label="Mobile Navigation" className="space-y-4 w-full text-center">
            <ul className="flex flex-col items-center gap-4">
              {navItems.map((item, index) => (
                <NavItem href={item.href} onClick={toggleMenu} key={index}>
                  {item.text}
                </NavItem>
              ))}
              {/* Submit Notice button in mobile view */}
              <ActionButton
                href="https://docs.google.com/forms/d/1jJwE0RdrXI9pR9ee4DN9M0NL0OqcPCJuai2hZJ_zfw4/viewform?edit_requested=true"
                text="Submit Notice"
                bgColor="bg-blue-500"
                textColor="text-white"
              />
            </ul>
          </nav>

          {/* Sidebar Content for Mobile View */}
          <div className="mt-6 border-t border-gray-200 pt-4 w-full flex justify-center">
            <Sidebar isMobile />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
