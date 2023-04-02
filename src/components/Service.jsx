import React from 'react'
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import ServicesSectionItem from './ServicesSectionItem'


const ServiceItemStyles = styled.div`
padding: 5rem 0;
.services__allItems {
  display: flex;
  gap: 10rem;
  justify-content: space-between;
  margin-top: 5rem;
}
@media only screen and (max-width: 1000px) {
  .services__allItems {
    flex-direction: column;
    max-width: 350px;
    margin: 0 auto;
    margin-top: 5rem;
    gap: 5rem;
  }
}
`;

function Service() {
  return (
    <ServiceItemStyles>
        <div className="container">
        <SectionTitle
        heading="Services"
        subheading='what i will do for you' /> 

        <div className="services__allItems">
        <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="app Dev"
            desc="I develop mobile application. I create mobile app with eye catching ui. "
          />
        </div>
        </div>
    </ServiceItemStyles>
  )
}

export default Service