import './App.css';
import './components/Atmaven.css'
import './components/Main.css'
import './components/Header.css'
import Header from './components/Header';
import Main from './components/Main';
import Atmaven from './components/Atmaven';
function App() {
  return (
    <div className='App'>
  <Header/>
  <Main/>
  <Atmaven/>
    </div>
  );
}

export default App;
