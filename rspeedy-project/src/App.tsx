import { useState } from '@lynx-js/react';
import type { Meal } from './data/mealDatabase.js';
import { mealDatabase } from './data/mealDatabase.js';
import { HomeScreen } from './screens/HomeScreen.js';
import { SearchScreen } from './screens/SearchScreen.js';

// Use the first two meals from the database as default meals
const defaultMeals: Meal[] = [mealDatabase[0], mealDatabase[1]];

export function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [savedMeals, setSavedMeals] = useState<Meal[]>(defaultMeals);

  const navigateTo = (screen: string) => {
    setCurrentScreen(screen);
  };

  const addMeal = (meal: Meal) => {
    if (!savedMeals.some((savedMeal) => savedMeal.id === meal.id)) {
      setSavedMeals([...savedMeals, meal]);
    }
    setCurrentScreen('home');
  };

  const removeMeal = (id: string) => {
    setSavedMeals(savedMeals.filter((meal) => meal.id !== id));
  };

  return (
    <view style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      {currentScreen === 'home' ? (
        <HomeScreen
          navigateTo={navigateTo}
          meals={savedMeals}
          removeMeal={removeMeal}
        />
      ) : (
        <SearchScreen navigateTo={navigateTo} addMeal={addMeal} />
      )}
    </view>
  );
}