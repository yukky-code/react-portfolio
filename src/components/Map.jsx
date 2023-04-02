import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../Images/map.jpg';




const MapStyles = styled.div`
margin-top: 100px;
color: white;
.container2 {
  position: relative;
  min-height: 400px;
}
`;

function Map() {
  return (
    <MapStyles>
        <div className="container2">
            <div>          
                <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61260.92886208251!2d135.15974007404483!3d35.092346290297236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600012c784fa7ab3%3A0x6cbeaab9b736a71a!2z5Li55rOi5aSn5bGx6aeF!5e0!3m2!1sja!2sjp!4v1680397797511!5m2!1sja!2sjp"} height={600} width={"100%"}/>         
            </div>
        </div>
    </MapStyles>

  )
}

export default Map