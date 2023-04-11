import React from 'react'
import SectionTitle from './SectionTitle'
import Button from './Button'
import aboutImage from "../Images/about.JPG";
import styled from 'styled-components';
import PText from './PText';


const AboutStyle = styled.div`
padding: 10rem 0 5rem;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;

  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
      text-align: left;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;
function AboutSection() {
  return (
    <AboutStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="私について"
            heading="About"
          />
          <PText>
            1998年3月31日生まれの25歳<br/>趣味は筋トレとファッションや美容です。<br/>
            前職ではWEB商材の提案営業に従事しておりました。<br/>
            現在では、独学でプログラミングの勉強を行いながら、WEBサイトの制作などに取り組んでいます。<br/>
            <br/>
            2022年10月からHTML/CSSの習得に向けて参考書とUdemyにて学習を開始。
            その後、サイト制作を行ってく中でJavascriptの学習も並行して進ました。<br/>
            2023年2月から、Reactを使用したサイト構築やアプリの制作に興味を持ち学習を開始。
            今回、学習のアウトプットとしてReactを用いたポートフォリオページの作成に着手しました。
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Works" btnLink="/works" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={aboutImage} alt="Img" />
        </div>
      </div>
    </AboutStyle>
  )
}

export default AboutSection