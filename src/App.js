import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Para from './component/Para';


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <nav>
        <Navbar/>
      </nav> 
      <Para/>
    </div>
  );
}

export default App;
