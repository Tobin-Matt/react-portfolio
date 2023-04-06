import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className='bg-gradient-to-bl from-[#bdc3c7] to-[#2c3e50] min-h-screen flex flex-col font-staatliches'>
      <Header handlePageChange={handlePageChange} currentPage={currentPage} />
      <Content currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;