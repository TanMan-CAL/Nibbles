import './Ingredients.css';
import React, { useEffect, useState } from "react";
import Axios from 'axios';

const Ingredients = () => {
  const [grids, setGrids] = useState([]);  // State to store fetched data
  const [loading, setLoading] = useState(true);  // State for tracking loading
  const [shoppingList, setShoppingList] = useState([]);  // State for shopping list

  useEffect(() => {
    // Fetch data when the component mounts
    Axios.get('http://localhost:5001/grid')  // Adjust the endpoint if needed
      .then((res) => {
        const data = res.data;
        if (Array.isArray(data)) {
          setGrids(data);  // Update state with fetched data

          // Filter ingredients that need to be replenished
          const itemsToReplenish = data.filter(grid => grid.weight <= grid.limit);
          setShoppingList(itemsToReplenish);  // Update shopping list state
        } else {
          console.error('Unexpected data format:', data);
        }
        
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.error('Error fetching grids:', err);
        setLoading(false);  // Set loading to false even on error
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;  // Show loading message while fetching data
  }

  return (
    <div className="Ingredients-container">
      <h1 className="Ingredients-title">Ingredients / Groceries</h1>
      <p className="Ingredients-description">Check how much of each ingredient you have and at the bottom, what ingredients you need to buy!</p>
      
      {/* Display the ingredients */}
      <div className="grid-container">
        {grids.length > 0 ? (
          grids.map((grid, index) => (
            <div className="content-container" key={index}>
              {/* Image from MongoDB (base64 string) */}
              <img src={grid.img || 'placeholder.png'} alt="Ingredient" className="image-placeholder" />
              <div className="description">
                <p>Ingredient: {grid.ingredient || 'No description available'}</p>
                <p>Weight in grams: {grid.weight || 'No description available'}</p>
                <p>Protein/100g: {grid.protein || 'No description available'}</p>
              </div>
            </div>
          ))
        ) : (
          <h1>No ingredients available</h1>  // Show this if no data is found after loading
        )}
      </div>

      {/* Shopping List Section */}
      <div className="shopping-list">
        <h1 className="shopping-list-title">Shopping List</h1>
        {shoppingList.length > 0 ? (
          <>
            <h2 className="replenish-title">You need to replenish:</h2>
            <ul>
              {shoppingList.map((item, index) => (
                <li key={index}>{item.ingredient}</li>
              ))}
            </ul>
          </>
        ) : (
          <h3>No ingredients are in your shopping list.</h3>
        )}
      </div>
    </div>
  );
};

export default Ingredients;
