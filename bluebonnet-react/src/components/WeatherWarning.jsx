// WeatherWarning.js
import React from "react";
import { IoWarning } from "react-icons/io5";
import "./WeatherWarning.css";

// Component for displaying weather warning information
function WeatherWarning({ plant, deleteWarning, setKeepWarning }) {
  // Handler for removing the weather warning
  const handleRemoveWarning = () => {
    setKeepWarning(false);
    deleteWarning(plant.id);
    console.log("Removed warning");
    console.log(plant.warning.title);
  };

  return (
    <div className="weather-warning">
      <div className="weather-warning-body">
        <div className="warning-title flex-row">
          <IoWarning className="warning-icon" />
          <p>{plant.warning.title}</p>
          <IoWarning className="warning-icon" />
          <button className="remove-warning" onClick={handleRemoveWarning}>
            X
          </button>
        </div>
        <p>{plant.warning.message}</p>
      </div>
    </div>
  );
}

export default WeatherWarning;
