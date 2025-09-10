import './App.css';
import profile from './profile.JPG'
import Projects from './project.js';
import React, { useState, useEffect } from 'react';
import ThemeToggler from './ThemeToggler';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
      <div 
  className="black-nav" 
  style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '30px', 
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold'
  }}
>
⚡️ Welcome to my personal website! ⚡️
</div>
      <p>
      </p>
      <div className="profile-section">
        <img 
          src={profile}
          style={{ width: '150px', height: '185px', borderRadius: '75px' }}
        />
        <h2>Donghyuk Lee</h2>
        
        <p>
        Hello! I'm currently an undergraduate student at KAIST. During my time at a science high school, I conducted various research related to neurobiology and bioengineering. Most recently, I studied how to predict genotypes and improve data bias using artificial neural network algorithms. I plan to enter the Department of Electrical Engineering at KAIST, and within the Computer Science Division, I have a broad interest in statistical inference models, information theory, and artificial intelligence model research.
        </p>
        <hr></hr>
        <h3>Experience</h3>
        <ul>
          <li>pre-URP at YOON LAB, Department of Biological Sciences, KAIST (2023.06. ~ 2023.09.)</li>
        </ul>
        <h3>Education</h3>
        <ul>
          <li>Gyeonggi-Buk Science High School (2022.03. ~ 2025.01.)</li>
          <li>KAIST, Department of Electrical & Electronic Engineering (2025.02. ~)</li>
        </ul>
      </div>
      <div className="contact-section" style={{ textAlign: 'center' }}>
        <h3>Contact</h3>
        <p>Email: {' '}<a href="mail:dhlee4832@kaist.ac.kr" style={{ color: '#2a2a8f', fontWeight: 'bold' }}>
      dhlee4832@kaist.ac.kr
    </a>{' '}</p>
      </div>
      <div className="My Works" style={{ textAlign: 'center' }}>
        <h3>My Previous Works</h3>
        <p>{' '}<a href="https://drive.google.com/drive/folders/1EqENBZmCR-nO5xjE92YyDrO0Xpp6gzq0?usp=share_link" style={{ color: '#2a2a8f', fontWeight: 'bold' }}>
      Drive Link
    </a>{' '}</p>
      </div>
      <div
  style={{
    backgroundColor: '#dfe6fa',
    padding: '15px 20px',
    borderRadius: '8px',
    marginBottom: '20px',
    textAlign: 'left'
  }}
>
  <p>
  In the future, if I publish a paper or do an internship, I will write my CV here!
  </p>
  <p>
    ➔ <strong>Undergraduate Interns:</strong> Unfortunately, not yet..!
  </p>

  <p>
    ➔ <strong>Published Paper:</strong> Unfortunately, not yet..!
  </p>

  <p>
    ➔ <strong>Academic conference participation:</strong> Unfortunately, not yet..!
  </p>
</div>
    </div>
    
  );
}

export default App;
