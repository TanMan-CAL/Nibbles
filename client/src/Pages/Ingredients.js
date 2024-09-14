import './Ingredients.css';
import React, { useEffect, useState } from "react";
import Axios from 'axios';

const Ingredients = () => {
  const [grids, setGrids] = useState([]);  // State to store fetched data
  const [loading, setLoading] = useState(true);  // State for tracking loading

  useEffect(() => {
      // Fetch data when the component mounts
      Axios.get('http://localhost:5001/grid')
          .then((res) => {
              setGrids(res.data);  // Update state with fetched data
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
      <h1 className="Ingredients-title">Ingredients</h1>
      <p className="Ingredients-description">Check how much of each ingredient you have!</p>
      <div className="grid-container">
        {grids && grids.length > 0 ? (
          grids.map((grid, index) => (
            <div className="content-container" key={index}>
              <img src={grid.img || 'placeholder.png'} alt="Placeholder" className="image-placeholder" />
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
    </div>
  );
};

export default Ingredients;
