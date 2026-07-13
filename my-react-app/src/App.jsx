import React, { useState } from 'react'
import './App.css'
import Block from './components/Block';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectBlock from './components/ProjectBlock';

function App() {
  return (
  <div className='content'>
    <Header />
    <div className='main-body'>
      <div className='projects'>
        <h2>Projects</h2>
        <span>
          <ProjectBlock imgURL='blog-website.png' caption='Blog Website' projectURL='https://github.com/andrewsimmons077-rgb/blog-website'/>
          <ProjectBlock imgURL='note-keeper.png' caption='Note Keeper' projectURL='https://github.com/andrewsimmons077-rgb/note-keeper' />
          <ProjectBlock imgURL='to-do-list.png' caption='To-Do List' projectURL='https://github.com/andrewsimmons077-rgb/ToDoList' />
        </span>
      </div>
      <div className='certificates'>
        <h2>Certificates</h2>
        <span>
          <Block imgURL='/Web-Development-Bootcamp.jpg' caption='Web Development Certificate'/>
          <Block imgURL='/CIntermediate.jpg' caption='C# Certificate' />
        </span>
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default App;
