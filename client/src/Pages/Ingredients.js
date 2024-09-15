import './Ingredients.css';
import React, { useEffect, useState } from "react";
import eggsImage from '../Images/eggs.png'; 
import riceImage from '../Images/rice.png'; 
import tofuImage from '../Images/tofu.png';
import { all } from 'axios';

const Ingredients = ({ shoppingList, allData }) => {
  // Map of ingredients to their typical unit weight
  const ingredientUnitWeight = {
    'eggs': 57,  // Consistently use 'eggs' here        
    'rice': 195,         
    'tofu': 340,       
  };

  // Map of ingredients to their images
  const ingredientImages = {
    'eggs': eggsImage,  // Use 'eggs' here as well
    'rice': riceImage,
    'tofu': tofuImage
  };


  const convertWeightToQuantity = (ingredient, weight) => {
    const normalizedIngredient = ingredient.toLowerCase();
    if (ingredientUnitWeight[normalizedIngredient]) {  // Ensure case-insensitive lookup
      return Math.floor(weight / ingredientUnitWeight[normalizedIngredient]);  // Convert weight to quantity
    }
    return weight;  // If no mapping found, return weight
  };

  return (
    <div className="Ingredients-container">
      <h1 className="Ingredients-title">Ingredients / Groceries</h1>
      <p className="Ingredients-description">Check how much of each ingredient you have and at the bottom, what ingredients you need to buy!</p>

      {/* Display the ingredients */}
      <div className="grid-container">
        {allData.length > 0 ? (
          allData.map((grid, index) => (
            <div className="content-container" key={index}>
              {/* Display the image if available or use placeholder */}
              <img 
                src={ingredientImages[grid.ingredient.toLowerCase()]} 
                alt={grid.ingredient} 
                className="ingredient-image" 
              />
              <div className="description">
                <p>Ingredient: {grid.ingredient || 'No description available'}</p>
                <p>
                  Quantity: {convertWeightToQuantity(grid.ingredient, grid.weight) || grid.weight}
                </p>
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



