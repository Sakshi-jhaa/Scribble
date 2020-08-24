import React, { Component } from 'react';
import Note from './component/Note';
import './component/Note.css';
import './App.css';
class App extends Component{
      render(){
          return(
              <div className="container">
              <Note />
              </div>
          );
      }
  }
export default App; 