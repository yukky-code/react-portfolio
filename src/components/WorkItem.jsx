import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import reactImage from "../Images/react.png";

const WorkItemstyle = styled.div`
margin: 100px 0;
a {
    ccursor: pointer;
    transition: all .5s;
}
a:hover{
    opacity: 0.6;
}
.WorksItem__title {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 20px 0;
}
`;


function WorksSectionItem({
    url = "https://wees.jp/",
    image = reactImage,
    title = "アプリケーション",
    desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quidem, modi dignissimos, eveniet voluptatem suscipit quaerat dolorem tempora nam dicta enim voluptatibus natus quis magnam amet aut unde, porro recusandae!",    
}) {
  return (
    <WorkItemstyle>
            <Link to={url}><img src={image} /></Link>
            <div className="WorksItem__title">{title}</div>
            <div className="WorksItem__desc">{desc}</div>
    </WorkItemstyle>
  )
}

export default WorksSectionItem