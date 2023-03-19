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
    <div>
      <Header handlePageChange={handlePageChange} />
      <Content currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;
