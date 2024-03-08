// Import using relational paths
import '../App.css';
import React, { useState } from 'react';
import Plant from "../components/Plant.jsx";
import "./Dashboard.css";
import  { usePlantContext } from '../PlantContext';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

function Dashboard({ setScreen, setSelectedPlant, currentPage }) { 
  const { plants } = usePlantContext();
  const user = "Alex";
  const unsafePlants = plants.filter(plant => plant.warning.title !== "");
  const safePlants = plants.filter(plant => plant.warning.title === "");

  const handlePlantClick = (plant) => {
    setSelectedPlant(plant);
    setScreen('plant-profile');
  };

  return (
    <div className="dashboard page">
      <div className="flex-row">
        <div className="left-leaves-image">
          <img src="images/leavesLeft.png" alt="" className="li" />
        </div>
        <div className="right-leaves-image">
          <img src="images/leavesRight.png" alt="" className="ri" />
        </div>
      </div>

      <div className="rectangle center-item">
        <h1>Welcome, {user}</h1>
      </div>

      <div className="plants">
        {unsafePlants.map((plant) => (
          <div key={plant.id} onClick={() => handlePlantClick(plant)}>
            <Plant plant={plant} />
          </div>
        ))}
          
        {safePlants.map((plant) => (
          <div key={plant.id} onClick={() => handlePlantClick(plant)}>
            <Plant plant={plant} />
          </div>
        ))}
      </div>

      <div className="navbar fw">
        <button
          onClick={() => setScreen("dashboard")}
          className={`space-between-content no-border nav-button ${currentPage === 'dashboard' ? 'active' : ''}`}>
          <FaHome />
        </button>

        <button
          onClick={() => setScreen("plant-search")}
          className={`space-between-content no-border nav-button ${currentPage === 'plant-search' ? 'active' : ''}`}>
          <FaPlusCircle />
        </button>

        <button
          onClick={() => setScreen("season-insights")}
          className={`space-between-content no-border nav-button ${currentPage === 'season-insights' ? 'active' : ''}`}>
          <TiWeatherPartlySunny />
        </button>
      </div>
    </div>
  );
}

export { Dashboard };
