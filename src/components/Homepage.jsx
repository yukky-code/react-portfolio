import React from 'react'
import { Button } from 'react-bootstrap';
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/bird1.png";
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import styled from 'styled-components';
import Service from './Service';
import Works from './Works';


const HomepageStyle = styled.div`
padding: 5rem 0 0;
`;

function Homepage() {
  return (
    <HomepageStyle>

    <div className="container text-center">

      <SectionTitle
        heading='Yukioka Tomohiro'
        subheading='my name is' />

      <img src={profileImage} className="profileImage" />
      <p>
        Yukioka Tomohiroです。<br/>
        普段は個人でWebサイトの制作やアプリの開発を行っています。
        主にHTML/CSS/Javascript/Reactをメインに使用しています。<br/>
        特にJavascriptを使用してアニメーションをつけることが好きです。
      </p>

      <Works />
      <Service />
    </div>

    </HomepageStyle>
  )
}

export default Homepage