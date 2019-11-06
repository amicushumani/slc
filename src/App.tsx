import React from 'react';
import './App.css';
//ts-ignore
import ProductsComponent from './Pages/Products/index';
import Navbar from './Components/Navbar';

const App: React.FC = () => {
  return <Navbar></Navbar>;
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to affiliate</h1>
    </div>
  );
};

export default App;
