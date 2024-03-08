// PlantContext.js
import React, { createContext, useContext, useState } from 'react';

// Creating the PlantContext
const PlantContext = createContext();

// Providing the context to its children
export const PlantProvider = ({ children }) => {
    // State to manage plant data
    const [plants, setPlants] = useState([]);

    // Function to add a new plant
    const addPlant = (newPlant) => {
        setPlants((prevPlants) => [...prevPlants, newPlant]);
    };

    // Function to delete a plant
    const deletePlant = (plantId) => {
        setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== plantId));
    };

    // Function to delete a warning for a plant
    const deleteWarning = (plantId) => {
        setPlants((prevPlants) =>
            prevPlants.map((plant) => {
                if (plant.id === plantId) {
                    return {
                        ...plant,
                        warning: {
                            title: "",
                            message: "",
                        },
                    };
                }
                return plant;
            })
        );
    };

    // Function to add a comment for a plant
    const addComment = (plantId, comment) => {
        setPlants((prevPlants) =>
            prevPlants.map((plant) => {
                if (plant.id === plantId) {
                    return {
                        ...plant,
                        neighborComments: [...plant.neighborComments, comment],
                    };
                }
                return plant;
            })
        );
    };

    return (
        <PlantContext.Provider value={{ plants, addPlant, deletePlant, deleteWarning, addComment }}>
            {children}
        </PlantContext.Provider>
    );
};

// Custom hook to use the PlantContext
export const usePlantContext = () => {
    const context = useContext(PlantContext);
    if (!context) {
        throw new Error('usePlantContext must be used within a PlantProvider');
    }
    return context;
};
