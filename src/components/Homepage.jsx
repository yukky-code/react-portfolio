import React from 'react'
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import styled from 'styled-components';
import Service from './ServiceSection';
import WorksSection from './WorksSection';
import AboutSection from './AboutSection';
import TopSection from './TopSection';

import { FadeAnimation } from './scrollAnimation.tsx';

const HomepageStyle = styled.div`
padding: 5rem 0 0;
`;

function Homepage() {
  return (
    <HomepageStyle>

    <div className="container">
      <TopSection />
      <AboutSection />


      <FadeAnimation>
      <Service />
      </FadeAnimation>

      <WorksSection />
    </div>

    </HomepageStyle>
  )
}

export default Homepage