import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Menu from './Components/Menu';

function App() {
  return (
    <div style={{'margin' : '4vmin'}}>
      <div className="App">
        <BrowserRouter>
          <Menu />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
