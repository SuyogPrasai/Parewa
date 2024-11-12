import React from 'react';

const MainContent = () => (
  <div className="w-full md:w-3/5 p-4">
    <h2 className="text-xl font-semibold mb-4">Main Content</h2>
    <div className="bg-blue-100 p-4 rounded-lg mb-4">Notice 1</div>
    <div className="bg-blue-100 p-4 rounded-lg mb-4">Notice 2</div>
    <div className="bg-blue-100 p-4 rounded-lg mb-4">Notice 3</div>
    {/* Display more notices dynamically as needed */}
  </div>
);

export default MainContent;
