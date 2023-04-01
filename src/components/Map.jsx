import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../Images/map.jpg';


const MapStyles = styled.div`
background: url(${MapImg}) no-repeat;
background-position: center;
background-size: cover;
min-height: 400px;
margin-top: 200px;

color: white;
.container2 {
  position: relative;
  min-height: 400px;
}
.map__card {
  position: absolute;
  right: 10%;
  bottom: 10%;
  padding: 2rem;
  background: #2B2B2B;
  width: 100%;
  max-width: 300px;
  border-radius: 12px;
}
.map__card__heading {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.map__card__link {
  display: inline-block;
  font-size: 1.5rem;
  margin-top: 2rem;
  text-decoration: none;
  color: white;
  transition: all 1s;
  cursor: pointer;
}
.map__card__link:hover {
  color: #48b4af;
}
@media only screen and (max-width: 768px) {
  background-position: 80% center;
}
@media only screen and (max-width: 400px) {
  .map__card {
    max-width: none;
    right: auto;
  }
}
`;

function Map() {
  return (
    <MapStyles>
        <div className="container2">
            <div className="map__card">
                <h3 className="map__card__heading">
                    Here is me
                </h3>
                <a href='https://www.google.co.jp/maps/@35.0923463,135.1597401,12.77z?hl=ja' 
                target="_blank" 
                rel='noreferrer'
                className='map__card__link'
                >
                    Open in Googlemap</a>
            </div>
        </div>
    </MapStyles>
  )
}

export default Map