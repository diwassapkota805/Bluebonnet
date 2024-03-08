import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { PlantProvider } from './PlantContext';

// Pages
import { PlantProfile } from './pages/PlantProfile';
import { SeasonInsights } from './pages/SeasonInsights';
import { Dashboard } from './pages/Dashboard';
import { PlantSearch } from './pages/PlantSearch';
import { AddPlant } from './pages/AddPlant';

function App() {
  const [index, setIndex] = useState(0); // Initial index state
  const [selectedPlant, setSelectedPlant] = useState(null); // Plant selected from search
  const [currentPage, setCurrentPage] = useState('dashboard'); // Current page

  const styles = {
    slideContainer: {
      height: "100vh",
      WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
    }
  };

  // Mapping of screen names to indices
  const screenIndices = {
    'dashboard': 0,
    'season-insights': 1,
    'plant-search': 2,
    'plant-profile': 3,
    'add-plant': 4,
  };

  // Function to set screen based on name
  const setScreen = (screenName) => {
    const newIndex = screenIndices[screenName];
    if (newIndex !== undefined) {
      setIndex(newIndex);
    } else {
      console.warn('Unknown screen name:', screenName);
    }
  };

  // Render PlantSearch component when index matches
  if (index === screenIndices["plant-search"]) {
    return (
      <PlantProvider>
        <PlantSearch setScreen={setScreen} setSelectedPlant={setSelectedPlant} currentPage={currentPage} />
      </PlantProvider>
    );
  }

  // Render AddPlant component when index matches
  if (index === screenIndices["add-plant"]) {
    return (
      <PlantProvider>
        <AddPlant setScreen={setScreen} selectedPlant={selectedPlant} currentPage={currentPage} />
      </PlantProvider>
    );
  }

  // Render PlantProfile component when index matches
  if (index === screenIndices['plant-profile']) {
    return (
      <PlantProvider>
        <PlantProfile setScreen={setScreen} selectedPlant={selectedPlant} currentPage={currentPage} />
      </PlantProvider>
    )
  }

  // Render the main app with swipeable views
  return (
    <PlantProvider>
      <SwipeableViews
        containerStyle={styles.slideContainer}
        enableMouseEvents
        index={index}
        onChangeIndex={setIndex}
      >
        <Dashboard setScreen={setScreen} setSelectedPlant={setSelectedPlant} currentPage={currentPage} />
        <SeasonInsights setScreen={setScreen} currentPage={currentPage} />
      </SwipeableViews>
      <PlantSearch setScreen={setScreen} setSelectedPlant={setSelectedPlant} currentPage={currentPage} />
      <PlantProfile setScreen={setScreen} selectedPlant={selectedPlant} currentPage={currentPage} />
      <AddPlant setScreen={setScreen} selectedPlant={selectedPlant} currentPage={currentPage} />
    </PlantProvider>
  );
}

export default App;
