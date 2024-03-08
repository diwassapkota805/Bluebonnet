import React from 'react';
import './CommunityForum.css';

// Component for displaying neighbor comments in a community forum
function CommunityForum({ plant, comments, type }) {
  // Renders a single comment with user information
  const renderComment = (com, index) => (
    <div key={index} className="comment flex-row">
      <img src="images/person-logo.png" alt="user" />
      <div className="name-comment">
        <h3>{com.name}</h3>
        <p>{com.comment}</p>
      </div>
    </div>
  );

  // Renders neighbor comments in a flexible column layout
  const renderNeighborComments = () => (
    <div className="neighbours-comments flex-column">
      {type === 'plant-profile' ? comments.map(renderComment) : plant.neighborComments.map(renderComment)}
    </div>
  );

  return (
    <div className="community-forum">
      <h3>What neighbors in Arlington are saying</h3>
      {plant && plant.neighborComments ? (
        renderNeighborComments()
      ) : (
        <p>No comments from neighbors yet.</p>
      )}
    </div>
  );
}

export default CommunityForum;
