import './css/App.css';
import { BrowserRouter } from 'react-router-dom';

//components
import Router from './Router';


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Router/>
        </div>
      </BrowserRouter>
  );
}

export default App;
