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
          Hello Did you see this?
          I impelmented!!!
          I just Add New one. please check again
          It will be started test
          I changed my git user
          Perhaps work ci
        </p>
        <Button />
        <Input />
        <Paragraph />
      </header>
    </div>
  );
}

export default App;
