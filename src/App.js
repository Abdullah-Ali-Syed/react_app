import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [ingredient, setIngredient] = useState('');
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  const searchIngredient = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setIngredient('');
    }
  };

  // Check if meals array exists and has elements
  const meal = data.meals && data.meals.length > 0 ? data.meals[0] : null;
  const mealName = meal ? meal.strMeal : '';
  const mealImage = meal ? meal.strMealThumb : '';

  return (
    <div className="App">
      <div className="instructions">
        <h2>Enter the Main Ingredient of the Dish:</h2>
      </div>
      <div className="Search">
        <input
          value={ingredient}
          onChange={(event) => setIngredient(event.target.value)}
          onKeyPress={searchIngredient}
          placeholder="Enter Ingredient"
          type="text"
        />
      </div>
      <div className="container">
        {/* Display the meal name */}
        <div className="Meal">
        {mealName ? (
        <h1>{mealName}</h1>
        ) : (
        <h1>Nothing to see here!</h1>
        )}
        </div>
        <div className="Image">
          <img src={mealImage}/>
        </div>
      </div>
    </div>
  );
}

export default App;





