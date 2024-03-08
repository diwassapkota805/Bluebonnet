import React, { useState } from 'react';
import { IoArrowBackSharp, IoSendSharp } from 'react-icons/io5';
import Plant from '../components/Plant';
import PlantItem from '../components/PlantItem';
import WeatherWarning from '../components/WeatherWarning';
import CommunityForum from '../components/CommunityForum';
import { usePlantContext } from '../PlantContext';
import '../App.css';
import './PlantProfile.css';

function PlantProfile({ setScreen, selectedPlant }) {
  // Plant context hook
  const { deleteWarning, addComment, deletePlant } = usePlantContext();

  // State for warning, comments, and input
  const [keepWarning, setKeepWarning] = React.useState(true);
  const [commentInput, setCommentInput] = React.useState('');
  const [comments, setComments] = useState(selectedPlant?.neighborComments || []);

  // Handle navigation back to the dashboard
  const handleBack = () => {
    setScreen('dashboard');
  };

  // Handle adding a comment
  const handleAddComment = () => {
    if (commentInput.trim() !== '') {
      // Create a new comment
      const newComment = {
        name: 'Alex',
        comment: commentInput,
      };

      // Update context and local state
      addComment(selectedPlant.id, newComment);
      setComments((prevComments) => [...prevComments, newComment]);
      setCommentInput('');
    }
  };

  // Handle deleting the current plant
  const handleDeletePlant = () => {
    deletePlant(selectedPlant.id);
    setScreen('dashboard');
  };

  // Component rendering
  return (
    <div className="plant-profile page">
      {/* Leaves images */}
      <div className="flex-row">
        <div className="left-leaves-image">
          <img src="images/leavesLeft.png" alt="" className="li" />
        </div>
        <div className="right-leaves-image">
          <img src="images/leavesRight.png" alt="" className="ri" />
        </div>
      </div>
      {/* Plant details */}
      <div className="plant-profile-body">
        {selectedPlant ? (
          <div className="plant-profile-top">
            {/* Display the plant item */}
            <PlantItem
              plantComponent={<Plant plant={selectedPlant} type="profile" />}
              plant={selectedPlant}
              type="plant-profile"
            />

            <div className="warning-profile">
              {/* Display weather warning if applicable */}
              {selectedPlant.warning.title !== '' && keepWarning ? (
                <WeatherWarning
                  plant={selectedPlant}
                  deleteWarning={deleteWarning}
                  setKeepWarning={setKeepWarning}
                />
              ) : null}
            </div>
          </div>
        ) : (
          <div>
            {/* No plant selected message */}
            <h2>No plant selected</h2>
            <button onClick={() => setScreen('plant-search')}>Select a plant</button>
          </div>
        )}

        {/* Community forum */}
        <div className="community-forum">
          <CommunityForum plant={selectedPlant} comments={comments} type="plant-profile" />
        </div>
        {/* Alex's comment input */}
        <div className="alex-comment">
          <input
            type="text"
            placeholder="Alex Says"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          {/* Button to add Alex's comment */}
          <button onClick={handleAddComment}>
            <IoSendSharp />
          </button>
        </div>
        {/* Back button and delete button */}
        <div className="back-button" onClick={handleBack}>
          <IoArrowBackSharp />
        </div>
        {/* Button to delete the plant */}
        <button className="delete-button center-button" onClick={handleDeletePlant}>
          Delete Plant
        </button>
      </div>
    </div>
  );
}

export { PlantProfile };
