import React from 'react';

import logo from '../imgs/parewa_noBackground.png'; // Adjust the path if needed

const Footer = () => (
    <>
        <footer class="bg-gray-100">
            <div class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <a
                        class="inline-block rounded-full bg-blue-500 p-2 text-white shadow transition hover:bg-blue-400 sm:p-3 lg:p-4"
                        href="#MainContent"
                    >
                        <span class="sr-only">Back to top</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex items-center justify-start space-x-4 w-[50%]">
                        <img
                            src={logo}
                            alt="Logo"
                            class="h-20 w-auto" // Adjust the size as needed
                        />
                        <p class="text-gray-500">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                            cum itaque neque.
                        </p>
                    </div>
                </div>

                <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                    <li>
                        <a class="text-gray-700 transition hover:text-gray-700/75" href="#"> About </a>
                    </li>
                    <li>
                        <a class="text-gray-700 transition hover:text-gray-700/75" href="#"> Services </a>
                    </li>
                    <li>
                        <a class="text-gray-700 transition hover:text-gray-700/75" href="#"> Projects </a>
                    </li>
                    <li>
                        <a class="text-gray-700 transition hover:text-gray-700/75" href="#"> Blog </a>
                    </li>
                </ul>

                <p class="mt-12 text-center text-sm text-gray-500 lg:text-right">
                    Copyright &copy; 2022. All rights reserved.
                </p>
            </div>
        </footer>
    </>
);

export default Footer;
