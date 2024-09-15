import React from 'react';
import './Recipies.css';
import eggsFriedRice from '../Images/eggsFriedRice.png';
import scrambledEggs from '../Images/scrambledEggs.png';
import tofuRiceBalls from '../Images/tofuRiceBalls.jpg';

const Recipies = ({ shoppingList }) => {
  // Example of recipes with required ingredients
  const recipes = [
    { title: 'Egg Fried Rice', description: 'A delicious fried rice recipe with eggs and rice.', img: eggsFriedRice, requiredIngredients: ['eggs', 'rice'] },
    { title: 'Scrambled Eggs', description: 'Healthy and nutritious egg dish', img: scrambledEggs, requiredIngredients: ['eggs'] },
    { title: 'Tofu Rice Balls', description: 'A simple tofu and rice recipe.', img: tofuRiceBalls, requiredIngredients: ['tofu', 'rice'] },
    { title: 'Tofu', description: 'A simple tofu recipe.', img: tofuRiceBalls, requiredIngredients: ['tofu'] },
  ];

  // Create a Set of available ingredients for quick lookups
  const shoppingIngredientsSet = new Set(shoppingList.map(item => item.ingredient.toLowerCase().trim()));

  console.log('Shopping Ingredients Set:', Array.from(shoppingIngredientsSet)); // Debugging line

  // Filter out recipes that require ingredients from the shopping list
  const availableRecipes = recipes.filter(recipe => {
    const needsReplenishing = recipe.requiredIngredients.some(ingredient => {
      const formattedIngredient = ingredient.toLowerCase().trim();
      const isInSet = shoppingIngredientsSet.has(formattedIngredient);
      console.log(`Checking ingredient: "${formattedIngredient}" - In Set: ${isInSet}`); // Debugging line
      return isInSet;
    });
    console.log('Recipe:', recipe.title, 'Needs Replenishing:', needsReplenishing); // Debugging line
    return !needsReplenishing; // Return recipes that do not need replenishing
  });

  return (
    <div className="recipie-container">
      <h1 className="recipie-title">Hey OmarE!</h1>
      <h4 className="recipie-intro">Here are the recipes you can make today:</h4>
      {availableRecipes.length > 0 ? (
        availableRecipes.map((item, index) => (
          <div className="content-container" key={index}>
            <div className="image-container">
              <img src={item.img} alt={item.title} className="image-placeholder" />
            </div>
            <div className="content-details">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button className="content-button">View Recipe</button>
            </div>
          </div>
        ))
      ) : (
        <h3>No recipes available with the ingredients you have.</h3>
      )}
    </div>
  );
};

export default Recipies;
