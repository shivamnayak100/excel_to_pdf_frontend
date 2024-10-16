// src/components/WordToPDF.js
import React, { useState } from 'react';
import axios from 'axios';

const WordToPDF = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError(null);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3001/word-to-pdf', formData, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `converted-${file.name}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setError(`Error uploading file: ${file.name}`);
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Word to PDF Converter</h1>
      <input type="file" accept=".doc,.docx" onChange={handleFileChange} />
      {file && <p>Selected file: {file.name}</p>}
      <button onClick={handleUpload}>Convert to PDF</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default WordToPDF;
