import React from 'react'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import styled from 'styled-components';
import WorksSectionItem from './WorksSectionItem';
import WorksItem from './WorkItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';


SwiperCore.use([Navigation]);

const WorkStyle = styled.div`
padding: 5rem 0 0;

#skill {
  display: flex;
  justify-content: space-around;
  margin: 5rem 0;
}
@media only screen and (min-width: 1100px) {
  #skill {
    display: block;
    margin: 5rem 0;
  }
}
.swiper-button-prev,
.swiper-button-next{
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: #212121;
  z-index: 100;
  right: 120px;
  left: auto;
  top: 0px;
  transform: translateY(50%);
  color: white;
  border-radius: 8px;
}
.swiper-button-next{
  right: 40px;
}
.swiper-button-prev::after,
.swiper-button-next::after{
  font-size: 2rem;
}


`;

function WorksSection() {
  return (
    <WorkStyle>

    <div className="container text-center">
        <SectionTitle
        heading='WORKS'
        subheading='作品・実績' />

    <section id="skill">
      <Swiper             
      spaceBetween={30}
      slidesPerView={1}
      navigation
      breakpoints={
        {
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          }
        }
      }
      >
        {WorksSectionItem.map((WorkSectionItem, index) =>{
          if(index >= 5) return;
          return(
            <SwiperSlide key={WorksSectionItem.id}>
              <WorksItem 
              url={WorkSectionItem.url}
              image={WorkSectionItem.img}
              title={WorkSectionItem.title}
              desc={WorkSectionItem.desc}
              />
            </SwiperSlide>
          );
        })}
      
      </Swiper>
    </section>
  </div>
  
</WorkStyle>
  )
}

export default WorksSection