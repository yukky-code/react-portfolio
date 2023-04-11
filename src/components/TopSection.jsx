import React from 'react'
import SectionTitle from './SectionTitle'
import profileImage from "../Images/bird1.png";
import styled from 'styled-components';
import { SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import Aboutskillinfo from './Aboutskillinfo';




const TopSectionStyle = styled.div`
text-align: center; 

.Top_desc {
  max-width: 800px;
  margin: 0 auto;
}

.sns_media {
  max-width: 800px;
  margin: 100px auto 0 auto;
  .sns_media-icon {
    display: flex;
    justify-content: space-between;
  }

  ul {

    li {
      list-style: none;

      a {
        text-decolation: none;
        color: white; 
      }
    }
  }

}


@media only screen and (max-width: 768px) {
    .Top_desc {
        text-align: left;
        font-size: 1rem;
    } 
    .sns_media {
      max-width: 800px;
      margin: 100px auto 0 auto;
      .sns_media-icon {
        display: flex;
        justify-content: space-between;
      }
    
      ul {
    
        li {
          list-style: none;
          width: 50px;
          height: 50px;
    
          a {
            text-decolation: none;
            color: white; 
          }
        }
      }
    
    }
    
}
`;

function TopSection() {
  return (
    <TopSectionStyle>
        <div className="container">

        <SectionTitle
        heading='Yukioka Tomohiro'
        subheading='' />
        <img src={profileImage} className="profileImage" />
        <p className='Top_desc'>
        初めまして、雪岡 智裕です。<br/>
        私は普段、個人でWebサイトの制作を行っています。<br/>
        主にHTML/CSS/Javascript/Reactをメインに使用しています。<br/>
        特にJavascriptを使用してアニメーションをつけることが好きです。<br/>
        最近ではReactを使用しての開発に興味を持って取り組んでいます。
        </p>


        <div className="sns_media">
          <div className="sns_media-icon">

            <a href='https://instagram.com/design__tomo?igshid=YmMyMTA2M2Y='>
            <Aboutskillinfo
            title = 'instagram'
            colors = '#F7035B'
            icon = {<SiInstagram />}
            />
            </a>

            <a href='https://instagram.com/design__tomo?igshid=YmMyMTA2M2Y='>
            <Aboutskillinfo
            title = 'twitter'
            colors = '#1F9CEA'
            icon = {<SiTwitter />}
            />
            </a>

            <a href='https://github.com/yukky-code/react-portfolio'>
            <Aboutskillinfo
            title = 'github'
            colors = '#000000'
            icon = {<SiGithub />}
            />
            </a>
          </div>
        </div>
                  
        
        </div>
    </TopSectionStyle>
  )
}

export default TopSection