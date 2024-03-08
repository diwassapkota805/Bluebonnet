import React, { useState } from 'react';
import plantData from '../data/plants.js';
import Plant from '../components/Plant.jsx';
import { IoSearchSharp } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaHome, FaPlusCircle } from "react-icons/fa";
import '../App.css';
import './PlantSearch.css';

function PlantSearch({ setScreen, setSelectedPlant, currentPage }) {
  // State for search results and search term
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search functionality
  const handleSearch = () => {
    const filteredPlants = plantData.filter((plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredPlants);
  };

  // Handle plant click event
  const handlePlantClick = (plant) => {
    setSelectedPlant(plant);
    setScreen("add-plant");
  };

  return (
    <div className="plant-search page">
      {/* Leaves images */}
      <div className="flex-row">
        <div className="left-leaves-image">
          <img src="images/leavesLeft.png" alt="" className="li" />
        </div>
        <div className="right-leaves-image">
          <img src="images/leavesRight.png" alt="" className="ri" />
        </div>
      </div>

      {/* Plant search body */}
      <div className="plant-search-body">
        <h1>Plant Search</h1>
        {/* Search input section */}
        <div className="input-section">
          <input
            type="text"
            placeholder="Search for plants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Search button */}
          <button onClick={handleSearch} className='search-button'><IoSearchSharp className='search-icon'/></button>
        </div>

        {/* Display search results */}
        <div className="search-results">
          {searchResults.length > 0 ? (
            searchResults.map((plant) => (
              <div key={plant.id} onClick={() => handlePlantClick(plant)}>
                <Plant plant={plant} type="search"/>
              </div>
            ))
          ) : (
            // Display all plants if no search results
            plantData.map((plant) => (
              <div key={plant.id} onClick={() => handlePlantClick(plant)}>
                <Plant plant={plant} type="search"/>
              </div>
            ))
          )}
        </div>

        {/* Back to dashboard button */}
        <button onClick={() => setScreen("dashboard")}>Back To Dashboard</button>
      </div>

      {/* Navigation bar */}
      <div className="navbar fw">
        {/* Home button */}
        <button
          onClick={() => setScreen("dashboard")}
          className={`space-between-content no-border nav-button ${currentPage === 'dashboard' ? 'active' : ''}`}
        >
          <FaHome />
        </button>

        {/* Add plant button */}
        <button
          onClick={() => setScreen("plant-search")}
          className={`space-between-content no-border nav-button ${currentPage === 'plant-search' ? 'active' : ''}`}
        >
          <FaPlusCircle />
        </button>

        {/* Season insights button */}
        <button
          onClick={() => setScreen("season-insights")}
          className={`space-between-content no-border nav-button ${currentPage === 'season-insights' ? 'active' : ''}`}
        >
          <TiWeatherPartlySunny />
        </button>
      </div>
    </div>
  );
}

export { PlantSearch };
