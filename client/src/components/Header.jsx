import React from 'react';
import logo from '../img/parewa_noBackground.png';

const Header = () => (
    <>
        <header className="bg-white h-[7rem] no-select">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex h-full items-center justify-between">
                    <div className="flex items-center gap-4">
                        <a className="block" href="#">
                            <span className="sr-only">Home</span>
                            <img src={logo} alt="Logo" className="h-24" />
                        </a>
                        <span className="text-3xl font-semibold text-primary font-roboto">परेवा</span>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-greenish transition hover:text-highlight" href="#"> About </a>
                                </li>
                                <li>
                                    <a className="text-greenish transition hover:text-highlight" href="#"> Fill In </a>
                                </li>
                                <li>
                                    <a className="text-greenish transition hover:text-highlight" href="#"> History </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-highlight px-5 py-2.5 text-sm font-medium text-white shadow"
                                    href="#"
                                >
                                    Submit Notice
                                </a>

                                <div className="hidden sm:flex">
                                    <a
                                        className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-highlight"
                                        href="#"
                                    >
                                        Register
                                    </a>
                                </div>
                            </div>

                            <div className="block md:hidden">
                                <button className="rounded bg-foreground p-2 text-primary transition hover:text-primary/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
);

export default Header;
