import React from 'react';
import pdf from '../assets/Jennifer-Engle-Resume-2023.pdf'


const Resume = () => {
  const downloadPdf = () => {
    // Replace this URL with the URL of your PDF file
    const src = '';
    window.open(pdf);
  };

  return (
    <div>
      <div className='aboutInfo'>
        <h3>My Resume</h3>
        <p>
          Instead of laying all of my history, I'll list out my skills and let you decide to view and/or download my formal resume as a PDF.
        </p>
        <div>
          <button className="btn btn-dark pdf" onClick={downloadPdf}>
           View & Download PDF
          </button>
        </div>
      </div>

      <div className='aboutInfo'>
        <h5>Skills:</h5>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Vanilla JavaScript</li>
          <li>jQuery</li>
          <li>MySQL</li>
          <li>NoSQL - MongoDB</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>Insomnia</li>
          <li>Postman</li>
          <li>Jest</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
          <li>Handlebars</li>
        </ul>
      </div>

      <div className='aboutInfo'>
        <h5>Additional Skills:</h5>
        <ul>
          <li>Adobe Creative Cloud</li>
          <li>JIRA & Azure DevOps</li>
          <li>Kanban</li>
          <li>Salesforce UI</li>
          <li>PowerBi UI</li>
          <li>BMC Ticketing System</li>
          <li>Software Development Lifecycle (SDLC)</li>
          <li>Centers of Excellence</li>
          <li>Scrum</li>
          <li>Lean Six Sigma - White & Yellow Belt</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;