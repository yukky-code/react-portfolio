import React from 'react';
import styled from 'styled-components';
import PText from './components/PText';
import aboutImage from "./Images/about1.jpg";
import AboutInfoItem from './components/AboutInfoItem';
import SectionTitle from './components/SectionTitle';
import AboutskillItem from './components/AboutskillItem';
import Aboutskillinfo from './components/Aboutskillinfo';
import { SiAdobephotoshop } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiBlender } from "react-icons/si";

const AboutPageStyles = styled.div`
  padding: 5rem 0 10rem 0;
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;  
  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin-top: 5rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 1.5rem;
    margin-bottom: 2rem;

  }
  .about__heading {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    span {
        background-color: var(--deep-dark);
        padding: 0.5rem;
        border-radius: 8px;
      }
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid #BDB4B4;
    }
  }
  .about__info__items {
    margin-top: 10rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-bottom: 3rem; 
  }
  .design_skill {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
    .top-section {
      flex-direction: column;
      gap: 0rem;
    }
    .about__subheading {
      font-size: 1.2rem;
    }
    .about__heading {
      font-size: 2rem;
    }
    .about__info__heading {
      font-size: 2rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
      <SectionTitle
            heading='about me'
            subheading='私について' />
          <div className="top-section">
            <div className="left">
              <h2 className="about__heading">
                <span>
                    雪岡 智裕
                </span>
              </h2>
              <p className="about__subheading">
                1998/03/31 25歳<br/>
                HTML/CSS/Javascript/React
              </p>
              <div className="about__info">
                <PText>
                    2020年に、関西大学人間健康学部人間健康学科を卒業後アパレルメーカーに就職。
                    就職後2ヶ月で会社が民事再生となり転職を決意。
                    その経験から、今後はITがより伸びていくことを実感しWEB商材の提案営業として再就職。
                    その後、2年間WEB商材の営業に従事したのちに、今後は提案するだけでなく、自分で作成まで行いより細部まで、
                    関わりたいと考えエンジニアとしてのキャリアチェンジを考えました。
                  <br /> <br />
                  2022年10月に前職を退職後、独学でサイト制作について学習しました。
                  知り合いや紹介などでHPやランディングページの作成を行いながらスキル向上に努めました。
                  その後アプリ開発にも興味を持ち、Reactの学習を始め現在に至ります。
                  <br />
                  <br />
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={aboutImage} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">学歴</h1>

              <AboutInfoItem
                title="高等学校"
                items={['兵庫県立篠山鳳鳴高等学校']}
              />
              <AboutInfoItem
                title="大学"
                items={['関西大学 人間健康学部 人間健康学科']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">スキル</h1>
            
              {/* <AboutskillItem />

              <div className='design_skill'>
              <Aboutskillinfo 
              title='photoshop'
              colors='#011D34'
              icon={<SiAdobephotoshop />}
              />
              <Aboutskillinfo 
              title='canva'
              colors='#484DEA'
              icon={<SiCanva />}
              />
              <Aboutskillinfo 
              title='figma'
              colors='#0DC97F'
              icon={<SiFigma />}
              />
              <Aboutskillinfo 
              title='blender'
              colors='#E27204'
              icon={<SiBlender />}
              />
              </div> */}
              
              <AboutInfoItem
                title="フロントエンド"
                items={['HTML5', 'CSS3', 'Javascript', 'React']}
              />
              <AboutInfoItem
                title="デザイン"
                items={['Photoshop', 'Canva', 'Figma', 'Blender']}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}