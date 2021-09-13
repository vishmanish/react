import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Event from './pages/event';
import Signup from './pages/signup';
import Signin from  './pages/signin'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component = {Home} />
          <Route path='/about' exact component = {About} />
          <Route path='/event' exact component = {Event} />
          <Route path='/signup' exact component = {Signup} />
          <Route path='/signin' exact component = {Signin} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
