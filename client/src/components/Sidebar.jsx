import React from 'react';

const Sidebar = () => (
  <div className="w-full md:w-1/5 bg-gray-100 p-4">
    <h2 className="text-xl font-semibold mb-4">Various Sections</h2>
    <ul className="space-y-2">
      <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Section 1</li>
      <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Section 2</li>
      <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Section 3</li>
      {/* Add more sections as needed */}
    </ul>
  </div>
);

export default Sidebar;
