import React from 'react'
import profileImage from "../Images/bird1.png";
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import styled from 'styled-components';
import Service from './ServiceSection';
import WorksSection from './WorksSection';
import AboutSection from './AboutSection';


const HomepageStyle = styled.div`
padding: 5rem 0 0;
`;

function Homepage() {
  return (
    <HomepageStyle>

    <div className="container text-center">

      <SectionTitle
        heading='Yukioka Tomohiro'
        subheading='coder' />

      <img src={profileImage} className="profileImage" />
      <p>
        初めまして、雪岡 智裕です。<br/>
        私は普段、個人でWebサイトの制作を行っています。
        主にHTML/CSS/Javascript/Reactをメインに使用しています。<br/>
        特にJavascriptを使用してアニメーションをつけることが好きです。
        最近ではReactを使用しての開発に興味を持って取り組んでいます。
      </p>

      <AboutSection />
      <Service />
      <WorksSection />
    </div>

    </HomepageStyle>
  )
}

export default Homepage