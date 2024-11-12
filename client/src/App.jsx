import React, { useState } from 'react';
import Sidebar, { sidebarItems } from './components/Sidebar';

import General from './components/General';
import Clubs from './components/Clubs';
import Departments from './components/Departments';
import School from './components/School';

import Header from './components/Header';
import Footer from './components/Footer';
import Info from './components/Info';
import Email from './components/Email';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('General');

  const handleSidebarClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderContent = () => {
    switch (activeComponent) {
      case 'General':
        return <General title={sidebarItems[0].text} className="h-full flex-grow" />;
      case 'School':
        return <School title={sidebarItems[1].text} className="h-full flex-grow" />;
      case 'Departments':
        return <Departments title={sidebarItems[2].text} className="h-full flex-grow" />;
      case 'Clubs':
        return <Clubs title={sidebarItems[3].text} className="h-full flex-grow" />;
      default:
        return <General title={sidebarItems[0].text} className="h-full flex-grow" />;
    }
  };

  return (
    <div className="app min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="hero-container flex flex-col md:flex-row justify-center items-start px-4 md:px-8 lg:px-12 py-8 w-full mt-4 relative">
        <div className="main-content-bg absolute inset-0 z-0" />
        <div className="flex flex-grow h-full max-w-5xl w-full gap-4 z-10 mb-8">
          <Sidebar 
            onClick={handleSidebarClick} 
            activeComponent={activeComponent}  // Pass the active component as a prop
            className="hidden lg:block lg:w-1/4" 
          />
          {renderContent()}
        </div>
      </div>

      <Email />
      <Info />
      <Footer className="mt-8" />
    </div>
  );
};

export default App;
