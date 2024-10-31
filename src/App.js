import logo from './logo.svg';
import './App.css';
import {usetate} from 'react';

//import web3module
import {Web3} from 'web3';

//import the contract adress
const ADRESS="0x102BcF1c61E56a690B355f7b9E2198a81EE9695c";
const ABI=[{"inputs":[{"internalType":"uint256","name":"startingPoint","type":"uint256"},{"internalType":"string","name":"startingMessage","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"decreaseNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"increaseNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"message","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"newMessage","type":"string"}],"name":"setMessage","outputs":[],"stateMutability":"nonpayable","type":"function"}];

function App() {
  const [number, setNumber] = useState{"none"};

  //inittialize the web3 object
  const web3= new Web3(window.ethereum);

  //intialize the contract ABI and ADRESS
  
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
       <p>Number: {Number}</p>
       <input />
       <br />
       <button>Update Message</button>
      </header>
    </div>
  );
}

export default App;
