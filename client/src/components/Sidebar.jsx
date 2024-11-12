import React from 'react';

// Reusable SidebarItem Component
const SidebarItem = ({ icon, text }) => (
  <li className="flex items-center text-primary hover:text-highlight transition-all duration-300 cursor-pointer p-2 rounded-lg hover:bg-blue-50">
    <i className={`${icon} mr-3 text-lg`} ></i>
    <span className="text-base font-medium">{text}</span>
  </li>
);

const Sidebar = () => {
  // Define the list of sidebar items
  const sidebarItems = [
    { icon: "fas fa-bullhorn", text: "Departments" },
    { icon: "fas fa-bullhorn", text: "Clubs" },
    { icon: "fas fa-bullhorn", text: "School" }
  ];

  return (
    <div className="w-full md:w-1/4 shadow-2xl rounded-3xl p-6 border border-gray-200 bg-white">
      <h2 className="text-[1.25rem] font-title text-primary font-semibold mb-6 pb-3 border-b-2 border-gray-300 tracking-wide">
        Notice Sources
      </h2>

      <ul className="space-y-4">
        {/* Render SidebarItems dynamically */}
        {sidebarItems.map((item, index) => (
          <SidebarItem key={index} icon={item.icon} text={item.text} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
