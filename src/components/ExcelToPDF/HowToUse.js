import React from 'react';
import './HowToUse.css'; // You can create a CSS file for styles

const HowToUse = () => {
  return (
    <div className="how-to-use-container">
      <h1>How to Use the Excel to PDF Converter Tool</h1>
      <p>
        Our <strong>Excel to PDF Converter Tool</strong> is designed to make it easy for you to convert your Excel files (.xls, .xlsx) into high-quality PDF documents. Follow the steps below to seamlessly upload your files and download the converted PDFs.
      </p>

      <h2>Step-by-Step Guide to Convert Excel to PDF:</h2>
      <h3>Select Your Excel Files:</h3>
      <ul>
        <li>Click on the <strong>"Choose a File"</strong> button to select the Excel files (.xls, .xlsx) you want to convert.</li>
        <li>You can upload multiple files at once by holding down the <code>Ctrl</code> (Windows) or <code>Cmd</code> (Mac) key while selecting your files.</li>
      </ul>

      <h3>Upload and Convert:</h3>
      <ul>
        <li>Once the files are selected, click on the <strong>"Convert to PDF"</strong> button.</li>
        <li>The tool will automatically process the files and convert each one to PDF format.</li>
      </ul>

      <h3>Download the PDF:</h3>
      <ul>
        <li>After the conversion is complete, your browser will automatically download the generated PDF file(s).</li>
        <li>The converted PDFs will be saved to your computer with the same name as the original Excel file, but in <code>.pdf</code> format.</li>
      </ul>

      <h3>Repeat as Needed:</h3>
      <ul>
        <li>If you have more files to convert, simply upload them again using the same process.</li>
      </ul>

      <h2>Key Features:</h2>
      <ul>
        <li><strong>Supports Multiple Files:</strong> Upload and convert up to 10 Excel files at once.</li>
        <li><strong>Fast and Accurate Conversion:</strong> The tool processes both .xls and .xlsx files and converts them into clean, readable PDF documents.</li>
        <li><strong>Cross-Platform:</strong> This tool works on any device, including desktops, laptops, and mobile devices, and supports all modern browsers.</li>
        <li><strong>Secure:</strong> Your files are processed securely, and both the uploaded Excel files and the generated PDFs are deleted automatically after download, ensuring your data is safe.</li>
      </ul>

      <h2>Frequently Asked Questions (FAQ)</h2>

      <h3>Which Excel formats are supported?</h3>
      <p>This tool supports both <code>.xls</code> (older Excel format) and <code>.xlsx</code> (newer Excel format).</p>

      <h3>Can I upload multiple files at once?</h3>
      <p>Yes, you can upload multiple Excel files at once by selecting them in the file chooser window.</p>

      <h3>How long will it take to convert my file?</h3>
      <p>Conversion time depends on the size of the file and the content. However, most conversions are completed within seconds.</p>

      <h3>Is there a limit to how many files I can convert?</h3>
      <p>You can upload and convert up to 10 files at a time.</p>

      <h3>Is my data safe?</h3>
      <p>Yes, after you download your PDF files, both the uploaded Excel files and the generated PDFs are automatically deleted from the server.</p>

      <h2>Why Use Our Excel to PDF Converter?</h2>
      <p>
        Our tool is designed with simplicity and speed in mind. Whether you're working with Excel spreadsheets for financial reports, project management, or data analysis, converting them into PDF format ensures they are easy to share, print, and view on any device. PDFs preserve the original layout and formatting of your Excel files, making them perfect for sharing with colleagues or clients.
      </p>
      <p>
        By converting Excel to PDF, you also eliminate compatibility issues across different devices or software versions. This ensures that your content appears exactly as intended every time.
      </p>

      <p className="call-to-action">
        Try our Excel to PDF Converter Tool today and enjoy a quick, seamless, and secure conversion process!
      </p>
    </div>
  );
};

export default HowToUse;
