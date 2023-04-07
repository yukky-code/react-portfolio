import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
height: 60px;
background-color: #212121;
border-radius: 40px 0 0 0 ;
display: flex;
align-items: center;
text-align: center;

@media only screen and (max-width: 768px) {
    font-size: 1rem;
}
`;

function Footer() {
  return (
    <FooterStyle>
        <div className="container">
        <p>
             2023 - Tomohiro Yukioka | design & codeing
        </p>
        </div>
    </FooterStyle>
  )
}

export default Footer