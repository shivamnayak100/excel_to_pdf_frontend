// src/components/WordToPDF.js
import React, { useState } from 'react';
import axios from 'axios';
import './WordToPDF.css';

const WordToPDF = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files)); // Convert FileList to array
    setError(null);
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setError('Please select at least one file');
      return;
    }

    try {
      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append('file', files[i]);

        const response = await axios.post('http://localhost:3001/word-to-pdf', formData, {
          responseType: 'blob',
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `converted-${files[i].name}.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      setError('Error uploading files');
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1 className="title">Word to PDF Converter</h1>
        <label className="file-label">
          Choose a File
          <input
            type="file"
            accept=".docx"
            multiple // Allow multiple files selection
            onChange={handleFileChange}
            className="file-input"
          />
        </label>

        {/* Display uploaded file names */}
        {files.length > 0 && (
          <ul className="file-list">
            {files.map((file, index) => (
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

export default WordToPDF;
