import React from 'react';

const Notices = () => (
  <div className="w-full md:w-1/5 bg-gray-50 p-4">
    <h2 className="text-xl font-semibold mb-4">Notices</h2>
    <ul className="space-y-2">
      <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Important Notice 1</li>
      <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Important Notice 2</li>
      <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Important Notice 3</li>
      {/* Add more important notices dynamically as needed */}
    </ul>
  </div>
);

export default Notices;
