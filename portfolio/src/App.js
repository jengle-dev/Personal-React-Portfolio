import React, { useState } from 'react';
import Header from './components/Header';
import Splash from './components/Splash';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

// css for App scope
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './custom.css'; 

function App() {
  //clickHandles
  const [page, setPage] = useState('Splash');
  
  function renderPage(){
    if (page === 'Splash')
    return <Splash />
    
    if (page === 'Projects')
    return <Projects />

    // continue 
    if (page === 'About')
    return <About />

    if (page === 'Resume')
    return <Resume />

  }

  return (
    <div className ="App">
      <Header setPage={setPage} firstName = 'Jennifer' lastName = 'Engle' />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;

// what are Props in react - pass Props to Header -- pass using JSX - create JSX attribute inside header -- these are more special
//           if e.target.textContent = Projects
