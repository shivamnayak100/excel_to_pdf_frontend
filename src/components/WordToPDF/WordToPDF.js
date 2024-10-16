// src/components/WordToPDF.js
import React, { useState } from 'react';
import axios from 'axios';

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
      <h1 className="title">Word to PDF Converter</h1>
      <input
        type="file"
        accept=".docx"
        multiple // Allow multiple file selection
        onChange={handleFileChange}
      />
      {files.length > 0 && (
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
      <button onClick={handleUpload}>Convert to PDF</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default WordToPDF;
