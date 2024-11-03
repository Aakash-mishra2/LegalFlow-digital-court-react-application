import React, { useState } from 'react';
import { MdOutlineUploadFile } from 'react-icons/md';
import { FaFileCircleCheck } from 'react-icons/fa6';

const DocumentUploader = ({
  label,
  onFileUpload,
  placeholder = "Upload a pdf document",
  disabled = false,
}) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      // onFileUpload();
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert("No file selected.");
      return;
    }

    // Implement your upload logic here, e.g., send to server
    console.log("Uploading:", file);
    // Reset after upload
    setFile(null);
  };

  return (
    <div className='mt-4 mb-2 rounded-lg border-2 border-gray-300 flex flex-col w-fit p-2 pt-4'>
      <p className="text-md font-circular mb-2">Upload Documents (FIR, PIL etc.)</p>
      {
        !file ? (
          <MdOutlineUploadFile className='text-5xl text-blue-700 ml-12' />
        ) : (
          <FaFileCircleCheck className='text-5xl text-blue-700 ml-12' />
        )
      }
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className='border-2 border-gray-200 p-1 mb-2 w-64 mt-2 rounded-md font-circular'
      />
    </div>
  );
};

export default DocumentUploader;