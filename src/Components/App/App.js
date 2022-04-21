import './App.css';
import logo from '../../images/moveo-logo.svg';
import Player from '../Player/Player';

function App() {
  return (
    <div className="App">
      <main className='main'>
      <img className='logo' src={logo} alt='moveo-logo'></img>
      <Player/>
      </main>
      
    </div>
  );
}

export default App;
