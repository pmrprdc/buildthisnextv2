// ProjectsList.js
import React from 'react';

function ProjectsList({ projects }) {
  return (
    <>
      {projects.map((project, index) => (
        <h3 key={index}>{project}</h3>
      ))}
    </>
  );
}

export default ProjectsList;
