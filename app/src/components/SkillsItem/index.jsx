import React from 'react'
import s from './style.module.css'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function SkillsItem({title,image,rate}) {

  return (
    <div className={s.item}>
      <img src={image} alt={title} />
      <p>{title}</p>
      <div>{[...new Array(5)].map((_,id) => id+1 <= rate ? <FaStar style={{color: 'black'}} /> : <FaRegStar/>)}</div>
    </div>
  )
}
