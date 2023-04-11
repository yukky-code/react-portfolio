import React from 'react'
import styled from 'styled-components';
import { SiJavascript } from "react-icons/si";


const AboutskillinfoStyle = styled.div`


  li {
    position: relative;
    display: grid;
    place-items: center;
    width: 200px;
    height: 200px;
  }
  .base {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 8px solid var(--color);
    border-left: 8px solid transparent;
    filter: drop-shadow(0 0 10px var(--color));
    animation: spin 8s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotateX(60deg) rotateZ(0);
    }
    100% {
      transform: rotateX(60deg) rotateZ(360deg);
    }
  }
  .base::after {
    position: absolute;
    content: "";
    width: 30px;
    height: 30px;
    top: 9px;
    left: 9px;
    border-radius: 50%;
    background-color: var(--color);
  }
  .base:hover {
    filter: drop-shadow(0 0 10px var(--color));
    animation-play-state: paused;
  }
  .title {
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 2px;
    transform: rotateY(30deg) skewY(-24deg) translateY(0px);
    pointer-events: none;
    opacity: 0;
  }
  .icon {
    display: grid;
    place-items: center;
    font-size: 55px;
    height: 100%;
    pointer-events: none;
  }
  .base:hover + .title + .icon {
    transform: rotateY(30deg) skewY(-24deg) translateY(-100px);
    color: var(--color);
    filter: drop-shadow(0 0 1px var(--color));
    animation: wave 1s ease-in-out infinite;
  }
  .base:hover + .title {
    transform: rotateY(30deg) skewY(-24deg) translateY(-30px);
    color: var(--color);
    filter: drop-shadow(0 0 2px var(--color));
    opacity: 1;
    animation: wave 1s ease-in-out infinite;
  }
  @keyframes wave {
    0% {
      margin-bottom: 0;
    }
    50% {
      margin-bottom: 15px;
    }
  }
  .base, .title, .icon {
    position: absolute;
    color: #b5b5b5;
    transform: rotateX(60deg) rotateZ(-45deg);
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }

  @media only screen and (max-width: 768px) {
    li {
        position: relative;
        display: grid;
        place-items: center;
        width: 80px;
        height: 80px;
      }
      .base::after {
        position: absolute;
        content: "";
        width: 15px;
        height: 15px;
        top: 0px;
        left: 0px;
        border-radius: 50%;
        background-color: var(--color);
      }
      .icon {
        display: grid;
        place-items: center;
        font-size: 30px;
        height: 100%;
        pointer-events: none;
      }
      .title {
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 2px;
        transform: rotateY(30deg) skewY(-24deg) translateY(0px);
        pointer-events: none;
        opacity: 0;
      }
  }
`;

function Aboutskillinfo({
    title = 'Title',
    colors = '#ef436b',
    icon = <SiJavascript />,
}) {
  return (
    <AboutskillinfoStyle>
            <li style={{"--color": colors}}>
                <span className="base"></span>
                <span className="title">{title}</span>
                <span class="icon">{icon}</span>
            </li>
    </AboutskillinfoStyle>
  )
}

export default Aboutskillinfo