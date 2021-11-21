import React from 'react';
import './App.css';
import { Comment } from './components/comment.component';

function App() {
  return (
    <div className="App">
      <head>Comment App KD</head>
      <header>
        <span >
          <a className='navbar-link' href="/">Home</a>  
        </span>
      </header>
      <div className='container'>
        <Comment />

      </div>
    
        
    </div>
  );
}

export default App;
