import React from 'react'
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import ServicesSectionItem from './ServicesSectionItem'


const ServiceItemStyles = styled.div`
color: #BDB4B4;
padding: 5rem 0;
.services__allItems {
  display: flex;
  gap: 10rem;
  justify-content: space-between;
}
@media only screen and (max-width: 1000px) {
  .services__allItems {
    flex-direction: column;
    max-width: 350px;
    margin: 0 auto;
    gap: 5rem;
  }
}
`;

function ServiceSection() {
  return (
    <ServiceItemStyles>
        <div className="container">
        <SectionTitle
        heading="Services"
        subheading='できること' /> 

        <div className="services__allItems">
        <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="WEBデザイン"
            desc="UI/UXに特化したデザインでWEBサイトの制作などを行います。"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="コーディング"
            desc="企業のホームページやランディングページの構築を行います。HTML/CSS/Javascriptを用いてスピーディーに業務を行います。"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="アプリケーション開発"
            desc="React/Next.jsを用いたUIに特化したSPAの構築を行います。"
          />
        </div>
        </div>
    </ServiceItemStyles>
  )
}

export default ServiceSection