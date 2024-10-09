import React, { useState } from 'react';
import axios from 'axios';

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
        const response = await axios.post('http://localhost:3001/convert', formData, {
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
    <div>
      <h1>Excel to PDF Converter</h1>
      <input
        type="file"
        accept=".xls,.xlsx"
        onChange={handleFileChange}
        multiple  // Allow multiple files selection
      />
      <button onClick={handleUpload}>Upload and Convert</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FileUpload;
