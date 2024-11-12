import React from 'react';

const SidebarItem = ({ icon, text, onClick, isActive }) => (
  <li
    onClick={onClick}
    className={`flex items-center transition-all duration-300 cursor-pointer p-2 rounded-lg 
      ${isActive ? "bg-blue-100 text-highlight font-semibold" : "text-primary hover:text-highlight hover:bg-blue-50"} 
      justify-center lg:justify-start`}
  >
    <i className={`${icon} mr-3 text-lg`} aria-hidden="true"></i>
    <span className="text-base font-medium">{text}</span>
  </li>
);

export const sidebarItems = [
  { icon: "fas fa-bullhorn", text: "📒 General", component: 'General' },
  { icon: "fas fa-bullhorn", text: "📕 School", component: 'School' },
  { icon: "fas fa-bullhorn", text: "📤 Departments", component: 'Departments' },
  { icon: "fas fa-bullhorn", text: "🎼 Clubs", component: 'Clubs' },
];

const Sidebar = ({ isMobile = false, onClick, activeComponent }) => {
  return (
    <aside className={`${isMobile ? "w-full text-center" : "hidden lg:block lg:w-1/4"} shadow-2xl rounded-3xl p-6 border border-gray-200 bg-white`}>
      <h2 className="text-lg font-title text-primary font-semibold mb-6 pb-3 border-b-2 border-gray-300 tracking-wide">
        Categories
      </h2>
      <ul className="space-y-4">
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            onClick={() => onClick(item.component)}
            isActive={activeComponent === item.component}  // Check if this item is active
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
