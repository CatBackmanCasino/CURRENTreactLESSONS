import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="Nice to meet you!" poop="firm" age="34" body="slim" cock="large" name="Eric"/>
    </div>
  );
}

export default App;
