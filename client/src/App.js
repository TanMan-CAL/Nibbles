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
import Axios, { all } from 'axios';
import { useSelector } from 'react-redux';
import Front from './Front.js';


function App() {
  const [allData, setAllData] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);


  useEffect(() => {
    // Fetch data when the component mounts
    Axios.get('http://localhost:4000/grid')  // Adjust the endpoint if needed
      .then((res) => {
        const data = res.data;
        if (Array.isArray(data)) {
          setAllData(data);
          // Filter ingredients that need to be replenished based on the 200g threshold
          const itemsToReplenish = data.filter(grid => 
            (grid.ingredient.toLowerCase() === 'eggs' && grid.weight <= 200) ||  // Use 'eggs' here
            (grid.ingredient.toLowerCase() === 'tofu' && grid.weight <= 200) ||
            (grid.ingredient.toLowerCase() === 'rice' && grid.weight <= 200)
          );
          setShoppingList(itemsToReplenish);  // Update shopping list state
        } else {
          console.error('Unexpected data format:', data);
        }
      })
      .catch((err) => {
        console.error('Error fetching grids:', err);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Recipies">
          {() => <Recipies shoppingList={shoppingList} />}
        </Route>
        <Route path="/Ingredients">
          {() => <Ingredients shoppingList={shoppingList} allData={allData} />}
        </Route>
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
