import React from 'react';
import './Plant.css';

const Plant = ({ plant, type }) => {
  switch(type) {
    case 'search':
      return (
        <div className="plant-long flex-row">
          <div className="plant-img-container">
            <img src={plant.image} alt={plant.name} className='plantImg' />
          </div>
          <h3>{plant.name}</h3>
        </div>
      );
    case 'add':
      return (
        <div className="plant">
          <div className="plant-img-container">
            <img src={plant.image} alt={plant.name} className='plantImg' />
          </div>
          <h2>{plant.name}</h2>
        </div>
      );
    default:
      return (
        <div className="plant">
          <div className="plant-img-container">
            {plant.warning.type === "heat-warning" && <img src="images/heat-warning.png" alt="heat-warning" className='warning' />}
            {plant.warning.type === "frost-warning" && <img src="images/frost-warning.png" alt="frost-warning" className='warning' />}
            {plant.warning.type === "wind-warning" && <img src="images/wind-warning.png" alt="wind-warning" className='warning' />}
            {plant.warning.type === "rain-warning" && <img src="images/rain-warning.png" alt="rain-warning" className='warning' />}
            <img src={plant.image} alt={plant.name} className='plantImg' />
          </div>
          <h3>{plant.name}</h3>
        </div>
      );
  }
};

export default Plant;
