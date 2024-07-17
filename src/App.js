import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import TaskDetails from './TaskDetails';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
      <TaskDetails />
    </div>
  );
}

export default App;
