import React from 'react';

const Email = () => (
  <>

    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-[2em] mb-[4rem] "  id="email" >
      <div class="mx-auto max-w-lg">
        <h1 class="text-center text-2xl font-bold text-blue-500 sm:text-3xl">Sign up to Our Email Newsletter!</h1>

        <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
          Signing up in our notice system allows you to have gain access to the events going on in bnks outside of school!
        </p>

        <form action="#" class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <p class="text-center text-lg font-medium">Enter your Email if you Havent!</p>

          <div>
            <label for="email" class="sr-only">Email</label>

            <div class="relative">
              <input
                type="email"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>
          <button
            type="submit"
            class="block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </>
);

export default Email;
