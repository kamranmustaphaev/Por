import React from 'react'
import Container from '../UI/Container'
import SkillsItem from '../SkillsItem'
import s from './style.module.css'
import html from './media/html.png'
import css from './media/css.png'
import js from './media/js.png'
import react from './media/react.png'



export default function Skills() {
    const skills = [
        {id:1,title: "HTML",image: html,rate: 4},
        {id:2,title: "CSS",image: css,rate: 4},
        {id:3,title: "Javascipt",image: js,rate: 4},
        {id:4,title: "React",image: react,rate: 4},
    ]
  return (
    <Container className={s.container} >
        <h2 id="skills">Skills</h2>
        <p>I work in such technologies as</p>
        <div className={s.skills}>
            {
                skills.map(el => <SkillsItem key={el.id} {...el}/>)
            }
        </div>
    </Container>
  )
}
