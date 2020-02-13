import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>

        <button>Have fun</button>

        <label htmlFor="username-input">Username</label>
        <input id="username-input" />

        <section aria-labelledby="section-one-header">
          <h3 id="section-one-header">Section One</h3>
          <p>some content</p>
        </section>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
