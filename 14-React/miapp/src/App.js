import logo from './logo.svg';
import './App.css';
// import ListItems from './components/ListItems';
// import Person from './components/Person';
import Counter from './components/Counter';
// import ClockConstruct from './components/ClockConstruct';
// import ClockDidMount from './components/ClockDidMount';
import ClockParent from './components/ClockParent';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />
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
      </a>*/}
      </header>
      <div className="body">
        <Counter />
      </div>

      <div className="clocks">
        <ClockParent />
      </div>

      <div className='life-cycle'>
        {/*<Container />*/}
      </div>
      {/*<ListItems myATributo="jordi atributo"/>
      <Person name="David" surname="Pinilla" age={27} />
      <Person name="Juan" surname="Pérez" age={127} />
      <Person name="David" surname="Ochando" age={97} />*/}
    </div>
  );
}

export default App;
