import logo from './logo.svg';
import './App.css';
import DatePicker from "./component/common/DatePicker/DatePicker";
import Paging from "./component/common/Paging";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <DatePicker />
      <Paging />
    </div>
  );
}

export default App;
