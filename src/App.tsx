import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is test
        </a>
      </header>
    </div>
  );
}

export default App;
