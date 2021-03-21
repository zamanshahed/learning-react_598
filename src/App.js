import './App.css';
import HelloWorld from './Components/HelloWorld';
import CounterEX from './Components/CounterEX';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <HelloWorld name="zaman.Shahed"/>
      </div>
      <div>
        <CounterEX/>
      </div>
      </header>
    </div>
  );
}

export default App;
