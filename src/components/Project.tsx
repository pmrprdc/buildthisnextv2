import React, { useState, useEffect } from 'react';

function ProjectsList({ projects }) {
  const [isFlashing, setIsFlashing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlashing((prev) => !prev);
    }, 500); // Changes the color every 500 milliseconds

    return () => clearInterval(interval);
  }, []);

  const flashingStyle = {
    color: isFlashing ? '#FFFF00' : '#FFD700', // Alternating between two shades of yellow
  };

  return (
    <>
      {projects.map((project, index) => (
        <h3 key={index} style={flashingStyle}>{project}</h3>
      ))}
    </>
  );
}

export default ProjectsList;
