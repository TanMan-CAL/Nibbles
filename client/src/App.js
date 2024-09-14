import './App.css';
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Recipies from './Pages/Recipies';
import Ingredients from './Pages/Ingredients';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import { useSelector } from 'react-redux';
import Front from './Front.js';


function App() {
  const [currentId, setCurrentId] = useState(null);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Recipies" component={Recipies} />
        <Route path="/Ingredients" component={Ingredients} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
