import React from 'react';

// Reusable Notice Component
const Notice = ({ title, content }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out cursor-pointer">
    <h3 className="text-xl font-semibold text-primary mb-2 font-title">{title}</h3>
    <p className="text-gray-700">{content}</p>
  </div>
);

const Departments = ({title}) => {
  // Notice data can be dynamically fetched or passed as props
  const notices = [];

  return (
    <div className="w-full md:w-4/5 p-6 bg-gray-50 rounded-3xl shadow-2xl 
                    lg:ml-0 mx-auto lg:max-w-full max-w-screen-sm h-[72vh]">
      <h2 className="text-2xl font-bold text-primary mb-8 pb-3 border-b-2 border-gray-300 tracking-wide font-sans 
                     text-center lg:text-left">
        {title}
      </h2>
      <div className="space-y-6">
        {/* Dynamically rendering notices */}
        {notices.map((notice, index) => (
          <Notice key={index} title={notice.title} content={notice.content} />
        ))}
      </div>
    </div>
  );
};

export default Departments;
