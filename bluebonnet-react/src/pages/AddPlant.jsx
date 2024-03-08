import React from 'react';
import Plant from '../components/Plant';
import './AddPlant.css';
import PlantItem from '../components/PlantItem';
import CommunityForum from '../components/CommunityForum';
import  { usePlantContext } from '../PlantContext';
import { IoArrowBackSharp } from 'react-icons/io5';

function AddPlant({ setScreen, selectedPlant }) {
    const { addPlant } = usePlantContext();

    const handleClick = () => {
        addPlant(selectedPlant);
        setScreen('dashboard');
    }

    const handleBack = () => {
        setScreen('dashboard');
    }
    return (
        <div className='add-plant'>
            <div className="flex-row">
                    <div className="left-leaves-image">
                        <img src="images/leavesLeft.png" alt="" className="li" />
                    </div>
                    <div className="right-leaves-image">
                        <img src="images/leavesRight.png" alt="" className="ri" />
                    </div>
            </div>

            <div className="add-plant-body">
                <div>
                    {selectedPlant ? (
                        <div>
                            <PlantItem plantComponent={<Plant plant={selectedPlant} type="add"/>} plant={selectedPlant} type="add-plant"/>
                        </div>
                    ) : (
                        <div>
                            <h2>No plant selected</h2>
                            <button onClick={() => setScreen("plant-search")}>Select a plant</button>
                        </div>
                    )}
                </div>
                
                <div className="community-forum">
                    <CommunityForum plant={selectedPlant} />
                </div>

                <button className='add-button center-button' onClick={handleClick}>Add</button>
                
                <div className="back-button-add-plant" onClick={handleBack}>
                    <IoArrowBackSharp />
                </div>
            </div>        
        </div>
    );
}

export { AddPlant }
