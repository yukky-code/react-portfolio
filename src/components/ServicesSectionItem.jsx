import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  margin-top: 50px; 
  .servicesItem__icon {
    svg {
      width: 3rem;
      font-size: 2rem;
    }
  }
  .servicesItem__title {
    font-size: 1.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
  .para p {
    font-size: 1rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {
  return (
    <ItemStyles className="servicesItem">
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}