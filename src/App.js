import React from 'react';
import ExcelToPDF from './components/ExcelToPDF/ExcelToPDF';
import BottomNavbar from './components/BottomNavbar/BottomNavbar'; 
import TopNavbar from './components/TopNavbar/TopNavbar'; 

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <ExcelToPDF/>
      <BottomNavbar/>
    </div>
  );
}

export default App;
  