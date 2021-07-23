import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import login from "./components/login.component.js";
import mainpage from "./components/mainpage.component";

function App() {
  return (
    <Router>
      <div>
      <Route path="/" exact component={login} />
      <Route path="/mainpage" exact component={mainpage} />
      </div>
    </Router>
  );
}

export default App;
