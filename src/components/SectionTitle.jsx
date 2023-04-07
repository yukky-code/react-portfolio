import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  animation: slide-animation 1.5s ease;
  @keyframes slide-animation {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  p {
    font-family: 'RobotoMono Regular';
    font-size: 1.5rem;
  }
  h2 {
    font-family: 'Montserrat Bold';
    font-size: 3.5rem;
    font-weight: bold;
    margin-top: 0.5rem;
    text-transform: uppercase;
    color: #BDB4B4;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}