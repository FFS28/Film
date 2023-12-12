import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hahaha I understood ssh key and gpg key.
        </p>
        <Button />
        <Input />
        <Paragraph />
      </header>
    </div>
  );
}

export default App;
