import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    fontSize: '1rem',
    position: 'fixed',
    bottom: '0',
    width: '100%'
  };

  return (
    <div style={footerStyle}>
      <p>contact</p>
    </div>
  );
}

export default Footer;
