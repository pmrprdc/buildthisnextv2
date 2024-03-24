import React, { useState, useEffect } from 'react';

function ProjectsList({ projects }) {
  const [isFlashing, setIsFlashing] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Start flashing by default for all buttons
    const interval = setInterval(() => {
      setIsFlashing((prev) => !prev);
    }, 500); // Changes the color every 500 milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {projects.map((project, index) => {
        const isHovered = hoveredIndex === index;
        // Adjust styles based on hover state; keep flashing effect as default
        const buttonStyle = {
          color: isFlashing ? '#FFFF00' : '#FFD700', // Alternating between two shades of yellow
          border: '1px solid #ccc',
          borderRadius: '20px',
          padding: '10px 20px',
          cursor: 'pointer',
          margin: '5px',
          background: isHovered ? 'lightgray' : 'transparent',
          transition: 'background-color 0.3s', // Smooth transition for background color
        };

        return (
          <button
            key={index}
            style={buttonStyle}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {project}
          </button>
        );
      })}
    </>
  );
}

export default ProjectsList;
