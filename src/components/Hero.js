import React from 'react';
import styled from 'styled-components';

function Hero() {
  
  const StyleImage = styled.img`
    'position': 'fixed',
    'top': 0, 
    'left': 0,
    'min-width': '100%',
    'min-height': '100%' 
  `;

  return(
    <div>
      <StyleImage>
        <img src="../assets/newYork.png"/>
      </StyleImage>
    </div>

  );
}
export default Hero;
