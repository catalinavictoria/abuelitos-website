import React from 'react';

function Homepage() {
  const url = 'https://i.pinimg.com/originals/c5/54/84/c554840ad3c7bb915c1b1f81f42a3f7a.jpg';
  return (
    <img src={url} style={{width: 650}} alt='Abuelitos' />
  );
}

export default Homepage;
