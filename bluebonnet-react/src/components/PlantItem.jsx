import React from 'react';
import "./PlantItem.css";

// Component for displaying plant items based on the type
function PlantItem({ plantComponent, plant, type }) {
  switch (type) {
    case 'seasonal':
      return (
        <div className="plant-item flex-row">
          {plantComponent}
          <p className="insight">{plant.seasonalInsight}</p>
        </div>
      );

    case 'add-plant':
      return (
        <div className="add-plant-plant-item">
          {plantComponent}

          <div className="lignt-water flex-row">
            <div className="water flex-row">
              <img src="images/water.png" alt="water" />
              <p>{plant.water}</p>
            </div>
            <div className="light flex-row">
              <img src="images/sun-icon.png" alt="water" />
              <p>{plant.light}</p>
            </div>
          </div>
          <div className="description flex-column">
            <h3>Description</h3>
            <p>{plant.description}</p>
          </div>
        </div>
      );

    default:
      return (
        <div className="">
          {plantComponent}
          <div className="description flex-column">
            <h3>Description</h3>
            <p>{plant.description}</p>
          </div>
        </div>
      );
  }
}

export default PlantItem;
