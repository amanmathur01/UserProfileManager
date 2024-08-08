import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  };

  return (
    <footer style={footerStyle}>
      <div style={{ width: '100%' }}>
        <p>&copy; {new Date().getFullYear()} IDEMIA <br /> All Rights Reserved</p>
        <p>Designed with ❤️ by Aman </p>
      </div>
    </footer>
  );
}

export default Footer;
