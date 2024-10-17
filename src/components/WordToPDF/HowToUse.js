import React from 'react';
import './HowToUse.css'; // You can create a CSS file for styles

const HowToUse = () => {
  return (
    <div className="how-to-use-container">
      <h1>How to Use the Word to PDF Converter Tool</h1>
      <p>
        Our <strong>Word to PDF Converter Tool</strong> allows you to easily convert your Word documents (.docx) into high-quality PDF files. Follow the steps below to quickly upload your Word files and download the converted PDFs.
      </p>

      <h2>Step-by-Step Guide to Convert Word to PDF:</h2>
      <h3>Select Your Word Files:</h3>
      <ul>
        <li>Click on the <strong>"Choose a File"</strong> button to select the Word documents (.docx) you want to convert.</li>
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
        <li>The converted PDFs will be saved to your computer with the same name as the original Word document, but in <code>.pdf</code> format.</li>
      </ul>

      <h3>Repeat as Needed:</h3>
      <ul>
        <li>If you have more files to convert, simply upload them again using the same process.</li>
      </ul>

      <h2>Key Features:</h2>
      <ul>
        <li><strong>Supports Multiple Files:</strong> Upload and convert up to 10 Word documents at once.</li>
        <li><strong>Fast and Accurate Conversion:</strong> The tool processes .docx files and converts them into clean, readable PDF documents.</li>
        <li><strong>Cross-Platform:</strong> This tool works on any device, including desktops, laptops, and mobile devices, and supports all modern browsers.</li>
        <li><strong>Secure:</strong> Your files are processed securely, and both the uploaded Word documents and the generated PDFs are deleted automatically after download, ensuring your data is safe.</li>
      </ul>

      <h2>Frequently Asked Questions (FAQ)</h2>

      <h3>Which Word formats are supported?</h3>
      <p>This tool supports <code>.docx</code> format, which is widely used in modern Word documents.</p>

      <h3>Can I upload multiple files at once?</h3>
      <p>Yes, you can upload multiple Word documents at once by selecting them in the file chooser window.</p>

      <h3>How long will it take to convert my file?</h3>
      <p>Conversion time depends on the size of the file and the content. However, most conversions are completed within seconds.</p>

      <h3>Is there a limit to how many files I can convert?</h3>
      <p>You can upload and convert up to 10 files at a time.</p>

      <h3>Is my data safe?</h3>
      <p>Yes, after you download your PDF files, both the uploaded Word documents and the generated PDFs are automatically deleted from the server.</p>

      <h2>Why Use Our Word to PDF Converter?</h2>
      <p>
        Our tool is designed with ease of use and efficiency in mind. Whether you're working with Word documents for reports, essays, or business contracts, converting them to PDF format ensures they are easy to share, print, and view on any device. PDFs preserve the original formatting of your Word documents, making them ideal for professional sharing.
      </p>
      <p>
        By converting Word to PDF, you also ensure that your document's formatting remains consistent across different devices and software. This eliminates any compatibility issues and guarantees that your content looks as intended every time.
      </p>

      <p className="call-to-action">
        Try our Word to PDF Converter Tool today for fast, secure, and accurate conversion!
      </p>
    </div>
  );
};

export default HowToUse;
