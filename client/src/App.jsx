import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Header from './components/Header';
import Footer from './components/Footer';
import Info from './components/Info';

const App = () => {
  return (
    <div className="app min-h-screen flex flex-col bg-gray-100">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <div className="hero-container flex flex-col md:flex-row justify-center items-start px-4 md:px-8 lg:px-12 py-8 w-full mt-4">
        {/* Background Layer */}
        <div className="main-content-bg absolute inset-0 z-0" />

        {/* Centered Wrapper with Max Width */}
        <div className="flex flex-grow h-full max-w-5xl w-full gap-4 relative z-10 mb-8">
          {/* Sidebar with responsive visibility */}
          <Sidebar className="hidden lg:block lg:w-1/4" />

          {/* Main content takes the remaining space */}
          <MainContent className="h-full flex-grow" />
        </div>
      </div>

      {/* Info Section */}
      <Info />

      {/* Footer Section */}
      <Footer className="mt-8" />
    </div>
  );
};

export default App;

