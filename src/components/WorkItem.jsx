import React from 'react'
import reactImage from "../Images/react.png";


function WorksSectionItem({
    image = reactImage,
    title = "アプリケーション",
    desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quidem, modi dignissimos, eveniet voluptatem suscipit quaerat dolorem tempora nam dicta enim voluptatibus natus quis magnam amet aut unde, porro recusandae!",    
}) {
  return (
    <div>
            <img src={image} />
            <div className="WorksItem__title">{title}</div>
            <div className="WorksItem__desc">{desc}</div>
    </div>
  )
}

export default WorksSectionItem