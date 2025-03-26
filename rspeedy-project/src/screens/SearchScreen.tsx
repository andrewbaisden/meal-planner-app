import { useCallback, useState } from '@lynx-js/react';
import React from 'react';
import '../styles/SearchScreen.css';
import { mealDatabase } from '../data/mealDatabase.js';
import type { Meal } from '../data/mealDatabase.js';

interface SearchScreenProps {
  navigateTo: (screen: string) => void;
  addMeal: (meal: Meal) => void;
}

export function SearchScreen({ navigateTo, addMeal }: SearchScreenProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Meal[]>([]);

  const handleSearch = useCallback((value: string) => {
    setSearchTerm(value);
    if (value.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = mealDatabase.filter((meal: Meal) =>
      meal.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  }, []);

  const handleBack = () => {
    navigateTo('home');
  };

  return (
    <view
      className="search-screen"
      style={{
        width: '100%',
        height: '100%',
        paddingBottom: '80px',
        boxSizing: 'border-box',
      }}
    >
      <view
        className="header"
        style={{ position: 'sticky', top: 0, zIndex: 10 }}
      >
        <view className="back-button" bindtap={handleBack}>
          <text>←</text>
        </view>
        <text className="title">Find Meals</text>
      </view>

      <view
        className="search-container"
        style={{ position: 'sticky', top: '60px', zIndex: 9 }}
      >
        <input
          className="search-input"
          type="text"
          placeholder="Search for meals..."
          value={searchTerm}
          bindinput={(e: any) => handleSearch(e.detail.value)}
        />
      </view>

      <scroll-view
        className="search-results"
        style={{
          width: '100%',
          height: 'calc(100% - 120px)',
          paddingLeft: '10px',
          paddingRight: '10px',
        }}
        scroll-orientation="vertical"
      >
        {searchResults.length === 0 && searchTerm !== '' ? (
          <view className="no-results">
            <text>No meals found. Try a different search term.</text>
          </view>
        ) : (
          searchResults.map((meal) => (
            <view
              key={meal.id}
              className="meal-item"
              bindtap={() => addMeal(meal)}
            >
              <image src={meal.image} className="meal-image" />
              <view className="meal-details">
                <text className="meal-name">{meal.name}</text>
                <text className="meal-calories">{meal.calories} calories</text>
              </view>
              <view className="add-icon">
                <text>+</text>
              </view>
            </view>
          ))
        )}
      </scroll-view>
    </view>
  );
}