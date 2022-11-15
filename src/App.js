import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Load...</p>
        <p>
          NEWS, IMPORTANT NOTICE <code>this is unbelievable...</code> wait.
        </p>
        <a
          className="App-link"
          href="foxnews.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open to learn more
        </a>
        <p>Make sure to go down 👇</p>
      </header>
    </div>
  );
}

export default App;
