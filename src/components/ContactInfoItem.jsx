import React from 'react'
import styled from 'styled-components'
import PText from './PText'
import { MdAddIcCall } from "react-icons/md";

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: #212121;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  color: white;
  .icon {
    color: white;
    background-color: #2B2B2B;
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 1.5rem;
  }
  .info p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
  }
`;

function ContactInfoItem({
    icon= <MdAddIcCall />,
    text = "this is info"
}) {
  return (
    <ItemStyles>
        <div className="icon">{icon}</div>
        <div className="info">
            <PText>{text}</PText>
        </div>
    </ItemStyles>
  )
}

export default ContactInfoItem