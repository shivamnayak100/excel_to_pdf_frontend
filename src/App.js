import React from 'react';
// import ExcelToPDF from './components/ExcelToPDF/ExcelToPDF';
import BottomNavbar from './components/BottomNavbar/BottomNavbar'; 
import TopNavbar from './components/TopNavbar/TopNavbar'; 
import WordToPDF from './components/WordToPDF/WordToPDF';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      {/* <ExcelToPDF/> */}
      <WordToPDF />
      <BottomNavbar/>
    </div>
  );
}

export default App;
  