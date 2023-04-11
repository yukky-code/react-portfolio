import React from 'react'
import styled from 'styled-components'
import Aboutskillinfo from './Aboutskillinfo';
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";


const AboutskillStyle = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    list-style-type: none;
    padding-left: 0;
    flex-wrap: wrap;
  }

`;

function AboutskillItem() {
  return (
    <AboutskillStyle>
        <ul>
        <Aboutskillinfo 
          title='HTML5'
          colors='#DC4A25'
          icon = {<SiHtml5 />}
          />
        <Aboutskillinfo 
          title='CSS3'
          colors='#244BDD'
          icon = {<SiCss3 />}
          />
        <Aboutskillinfo 
          title='Javascript'
          colors='#F5D13A'
          icon = {<SiJavascript />}
          />
        <Aboutskillinfo 
          title='React'
          colors='#04D1F6'
          icon = {<SiReact />}
          />
        </ul>
    </AboutskillStyle>
  )
}

export default AboutskillItem