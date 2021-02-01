import './App.css';
import EskapList from './components/EskapList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import EskapInfo from './components/EskapInfo';
import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Eskap-React-App</h1>
        <Navbar/>
        <Main/>
      </div>
    </Router>
  );
}

function Main() {
  return (
    <Switch>
      <Route exact path="/" children={<EskapList/>}/>
      <Route path="/:id" children={<EskapInfo/>}/>
    </Switch>
  );
}

export default App;
