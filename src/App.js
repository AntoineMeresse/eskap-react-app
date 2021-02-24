import './App.css';
import EskapList from './components/EskapList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import EskapInfo from './components/EskapInfo';
import Navbar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import Login from './components/authentification/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <Container className="align-items-center justify-content-center" style={{minHeight : "90vh"}}>
          <>
            <Switch>
              <PrivateRoute exact path="/" component={() => <EskapList/>}/>
              <PrivateRoute path="/eskap/:id" component={() => <EskapInfo/>}/>
              <Route path="/login" component={Login}/>
            </Switch>
          </>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;