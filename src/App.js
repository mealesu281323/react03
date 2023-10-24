import logo from './logo.svg';
import './App.css';
import C01componente from './pagina/C01componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          edit <code>src/App.js</code> 
        </p>
        <a 
        className="App-link"
        href="https://resactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
          learn React
        </a>
        
        </header> 
    </div>
  );
}

export default App;
