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
    <div className='bg-[#2b2b2b] min-h-screen flex flex-col font-staatliches'>
      <Header handlePageChange={handlePageChange} />
      <Content currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;
