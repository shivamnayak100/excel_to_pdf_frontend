import React from 'react';
import FileUpload from './components/ExcelToPDF/FileUpload';
import BottomNavbar from './components/BottomNavbar/BottomNavbar'; 
import TopNavbar from './components/TopNavbar/TopNavbar'; 

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <FileUpload />
      <BottomNavbar/>
    </div>
  );
}

export default App;
  