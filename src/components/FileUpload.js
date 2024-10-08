import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError(null);  // Clear any previous errors
  };

  // Handle file upload and conversion
  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3001/convert', formData, {
        responseType: 'blob',  // Ensure response is treated as binary data
      });

      // Create a URL for the PDF and trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'converted.pdf');  // Set file name for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setError('Error uploading file');
    }
  };

  return (
    <div>
      <h1>Excel to PDF Converter</h1>
      <input
        type="file"
        accept=".xls,.xlsx"  // Allow both .xls and .xlsx files
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload and Convert</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FileUpload;
