import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Projects from '../components/Projects.js';
import ThemeToggler from '../components/ThemeToggler.js';
import React, { useState, useEffect } from 'react';

export default function Home() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
      <Head>
        <title>Donghyuk Lee's Portfolio</title>
        <meta name="description" content="Personal portfolio website of Donghyuk Lee" />
      </Head>
      <div 
        className="black-nav" 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '50px',
          padding: '0 20px',
          fontSize: '18px',
          fontWeight: 'bold'
        }}
      >
        <span>⚡️ Welcome to my personal website! ⚡️</span>
        <ThemeToggler />
      </div>
      <p></p>
      <div className="profile-section">
        <Image 
          src="/profile.JPG"
          alt="Donghyuk Lee profile picture"
          width={150}
          height={185}
          style={{ borderRadius: '75px' }}
        />
        <h2>Donghyuk Lee</h2>
        <p>
        Hello! I'm currently an undergraduate student at KAIST. During my time at a science high school, I conducted various research related to neurobiology and bioengineering. Most recently, I studied how to predict genotypes and improve data bias using artificial neural network algorithms. I plan to enter the Department of Electrical Engineering at KAIST, and within the Computer Science Division, I have a broad interest in statistical inference models, information theory, and artificial intelligence model research.
        </p>
        <hr />
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
        <p>{' '}<a href="mail:dhlee4832@kaist.ac.kr" style={{ color: '#2a2a8f', fontWeight: 'bold' }}>
      dhlee4832@kaist.ac.kr
    </a>{' '}</p>
      </div>
      <div className="My Works" style={{ textAlign: 'center' }}>
        <h3>My Previous Works</h3>
        <p>{' '}<a href="https://drive.google.com/drive/folders/1EqENBZmCR-nO5xjE92YyDrO0Xpp6gzq0?usp=share_link" style={{ color: '#2a2a8f', fontWeight: 'bold' }}>
      Drive Link
    </a>{' '}</p>
      </div>
      <div className="Blog Link" style={{ textAlign: 'center', margin: '20px' }}>
        <h3>Blog</h3>
        <Link href="/blog">
          <a style={{ color: '#2a2a8f', fontWeight: 'bold', cursor: 'pointer' }}>Go to Blog</a>
        </Link>
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
