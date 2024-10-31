import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <button>Get Number</button>
       <br />
       <button>Get Message</button>
       <br />
       <button>Increase Number</button>
       <br />
       <button>Decrease Number</button>
       <br />
       <input />
       <br />
       <button>Update Message</button>
      </header>
    </div>
  );
}

export default App;
