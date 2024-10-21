import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import BottomNavbar from './components/BottomNavbar/BottomNavbar'; 
import TopNavbar from './components/TopNavbar/TopNavbar'; 
import WordToPDF from './components/WordToPDF/WordToPDF';
import ExcelToPDF from './components/ExcelToPDF/ExcelToPDF';

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavbar />
        
        <Routes>
          <Route path="/" element={<WordToPDF />} />
          <Route path="/excel-to-pdf" element={<ExcelToPDF />} />
        </Routes>
        
        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
