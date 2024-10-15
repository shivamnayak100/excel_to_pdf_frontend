import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';

const FileUpload = () => {
  const [files, setFiles] = useState([]);  // Multiple files
  const [error, setError] = useState(null);

  // Handle multiple file selection
  const handleFileChange = (e) => {
    setFiles(e.target.files);
    setError(null);  // Clear any previous errors
  };

  // Handle file upload and conversion
  const handleUpload = async () => {
    if (files.length === 0) {
      setError('Please select at least one file');
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append('file', files[i]);

      try {
        const response = await axios.post('http://localhost:3001/excel-to-pdf', formData, {
          responseType: 'blob',  // Ensure response is treated as binary data
        });

        // Create a URL for the PDF and trigger download
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `converted-${files[i].name}.pdf`);  // Set file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (err) {
        setError(`Error uploading file: ${files[i].name}`);
        console.error(err);
      }
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1 className="title">Excel to PDF Converter</h1>
        <label className="file-label">
          Choose a File
          <input
            type="file"
            accept=".xls,.xlsx"
            onChange={handleFileChange}
            multiple  // Allow multiple files selection
            className="file-input"
          />
        </label>
  
        {/* Display uploaded file names */}
        {files.length > 0 && (
          <ul className="file-list">
            {Array.from(files).map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
  
        {/* Conditionally render the Upload button only when files are selected */}
        {files.length > 0 && (
          <button onClick={handleUpload} className="button">Convert to PDF</button>
        )}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );  
};

export default FileUpload;
