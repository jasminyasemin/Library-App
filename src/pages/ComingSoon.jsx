import React from 'react';
import '../styles/ComingSoon.css';

// This component displays a "Coming Soon" message with an animated image
const ComingSoon = () => {
  return (
    // Wrapper for the entire page content
    <div className='page-container'>

      {/* Swinging image to indicate the feature is under construction */}
      <img className='swing-img' src="images/comingsoon.png" alt="coming soon" />
      
    </div>
  );
};

export default ComingSoon;