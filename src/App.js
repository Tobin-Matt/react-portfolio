import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header>
        <Navbar />
      </Header>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
