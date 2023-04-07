import React from 'react'
import SectionTitle from './SectionTitle'
import profileImage from "../Images/bird1.png";
import styled from 'styled-components';

const TopSectionStyle = styled.div`
text-align: center; 

@media only screen and (max-width: 768px) {
    .Top_desc {
        text-align: left;
        font-size: 1rem;
    } 
    
}
`;

function TopSection() {
  return (
    <TopSectionStyle>
        <div className="container">

        <SectionTitle
        heading='Yukioka Tomohiro'
        subheading='coder' />
        <img src={profileImage} className="profileImage" />
        <p className='Top_desc'>
        初めまして、雪岡 智裕です。<br/>
        私は普段、個人でWebサイトの制作を行っています。
        主にHTML/CSS/Javascript/Reactをメインに使用しています。<br/>
        特にJavascriptを使用してアニメーションをつけることが好きです。
        最近ではReactを使用しての開発に興味を持って取り組んでいます。
        </p>
        
        </div>
    </TopSectionStyle>
  )
}

export default TopSection