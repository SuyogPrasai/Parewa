import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Header from "./components/Header";
import Notices from './components/Notices';

const App = () => (
  <div className="App">
    <Header />
    <div className="flex flex-col md:flex-row">
      {/* <Sidebar />
      <MainContent />
      <Notices /> */}
    </div>
  </div>
);

export default App;
