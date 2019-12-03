import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';

const App: React.FC = () => {
  return <Navbar></Navbar>;
};

const Home = () => {
  return (
    <div>
      <h1>Task Master</h1>
    </div>
  );
};

export default App;
