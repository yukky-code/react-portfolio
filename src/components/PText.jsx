import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin-bottom: 0;
  padding: 0; 
  font-size: 1.1rem;
  line-height: 1.3em;
  margin: 0 auto;
  p{
    margin-bottom: 0;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}