import React from 'react';

const Resume = () => {
  const downloadPdf = () => {
    // Replace this URL with the URL of your PDF file
    const src = '../assets/Jennifer-Engle-Resume-2023.pdf';
    window.open(src, '_blank');
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={downloadPdf}>
        Download PDF
      </button>
    </div>
  );
};

export default Resume;