// Import statements
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaHome, FaPlusCircle } from "react-icons/fa";
import '../App.css';
import "./SeasonalInsights.css";
import WeatherForecast from '../components/WeatherForecast';
import PlantItem from '../components/PlantItem';
import Plant from '../components/Plant';
import plantData from '../data/plants';
import weatherData from '../data/weather'; // Correct import statement for weatherData

const seasons = ['Spring', 'Summer', 'Fall', 'Winter'];

// Function to display season text in the Slider component
function valuetext(value) {
  return seasons[value];
}

function SeasonInsights({ setScreen, currentPage }) {
  // State for selected season
  const [selectedSeason, setSelectedSeason] = useState(0);
  const weatherInfo = weatherData; // Assuming 'weatherData' is defined elsewhere
  const plantsWithSeasonalInsight = plantData.filter(plant => plant.seasonalInsight);

  // Sample current weather data
  const currentWeather = {
    temperature: "75°F",
    chanceOfRain: "20%",
    wind: "8 mph NW",
    humidity: "40%",
  };

  return (
    <div className={`season-insights page ${seasons[selectedSeason]}-background `}>
      {/* Leaves images */}
      <div className="flex-row">
        <div className="left-leaves-image">
          <img src="images/leavesLeft.png" alt="leaves" />
        </div>
        <div className="right-leaves-image">
          <img src="images/leavesRight.png" alt="leaves" />
        </div>
      </div>

      {/* Display current weather */}
      <div className="current-weather flex-row">
        <div className="cur-weather-left flex-column">
          <img src="images/cloud.png" alt="" className='cloud' />
          <p>{currentWeather.temperature}</p>
        </div>
        <div className="cur-weather-right flex-column">
          <p>Chance of Rain: {currentWeather.chanceOfRain}</p>
          <p>Wind: {currentWeather.wind}</p>
          <p>Humidity: {currentWeather.humidity}</p>
        </div>
      </div>

      {/* Display daily weather forecast */}
      <div className="daily-weather flex-row">
        {weatherInfo.map((weather) => (
          <div key={weather.day}>
            <WeatherForecast weather={weather} />
          </div>
        ))}
      </div>

      {/* Seasonal insights section */}
      <div className="insights cc">
        <h1>Seasonal Insights</h1>

        {/* Season labels */}
        <div className="seasons-label fw flex-row">
          {seasons.map(season => (
            <p className='season'>{season}</p>
          ))}
        </div>

        {/* Season slider */}
        <Box sx={{ width: 350 }}>
          <Slider
            aria-label="Seasonal Insights"
            value={selectedSeason}
            onChange={(event, newValue) => setSelectedSeason(newValue)}
            getAriaValueText={valuetext}
            step={1}
            marks
            min={0}
            max={3}
            sx={{
              color: '#4CAF50',
            }}
          />
        </Box>

        {/* Display plants with seasonal insight */}
        <div className="seasonal-insights-plants flex-column">
          {plantsWithSeasonalInsight.map((p) => {
            const plantComponent = <Plant plant={p} />;
            return (
              <div className='plant-item'>
                <PlantItem key={p.id} plant={p} plantComponent={plantComponent} type="seasonal" />
              </div>
            );
          })}
        </div>

        {/* Navigation bar */}
        <div className="navbar fw">
          <button
            onClick={() => setScreen("dashboard")}
            className={`space-between-content no-border nav-button ${currentPage === 'dashboard' ? 'active' : ''}`}
          >
            <FaHome />
          </button>

          <button
            onClick={() => setScreen("plant-search")}
            className={`space-between-content no-border nav-button ${currentPage === 'plant-search' ? 'active' : ''}`}
          >
            <FaPlusCircle />
          </button>

          <button
            onClick={() => setScreen("season-insights")}
            className={`space-between-content no-border nav-button ${currentPage === 'season-insights' ? 'active' : ''}`}
          >
            <TiWeatherPartlySunny />
          </button>
        </div>
      </div>
    </div>
  );
}

export { SeasonInsights };
