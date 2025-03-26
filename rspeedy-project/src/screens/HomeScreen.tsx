import React from 'react';
import '../styles/HomeScreen.css';
import type { Meal } from '../data/mealDatabase.js';

interface HomeScreenProps {
  navigateTo: (screen: string) => void;
  meals: Meal[];
  removeMeal: (id: string) => void;
}

export function HomeScreen({ navigateTo, meals, removeMeal }: HomeScreenProps) {
  const navigateToSearch = () => {
    navigateTo('search');
  };

  return (
    <view
      className="home-screen"
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
        <text className="title">My Meals</text>
        <view className="add-button" bindtap={navigateToSearch}>
          <text>+</text>
        </view>
      </view>

      {meals.length === 0 ? (
        <view className="empty-state">
          <text>No meals added yet. Tap + to add a meal.</text>
        </view>
      ) : (
        <scroll-view
          className="meals-list"
          style={{
            width: '100%',
            height: 'calc(100% - 60px)',
            paddingLeft: '10px',
            paddingRight: '10px',
          }}
          scroll-orientation="vertical"
        >
          {meals.map((meal) => (
            <view key={meal.id} className="meal-item">
              <image src={meal.image} className="meal-image" />
              <view className="meal-details">
                <text className="meal-name">{meal.name}</text>
                <text className="meal-calories">{meal.calories} calories</text>
              </view>
              <view
                className="remove-button"
                bindtap={() => removeMeal(meal.id)}
              >
                <text>×</text>
              </view>
            </view>
          ))}
        </scroll-view>
      )}
    </view>
  );
}