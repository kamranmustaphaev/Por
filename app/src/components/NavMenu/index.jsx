import React from 'react'
import s from './style.module.css'
import Container from '../UI/Container'
import { FaBars } from "react-icons/fa";


export default function NavMenu() {
  return (
     <nav id='/'>
        <Container className={s.container}>
         <FaBars className={s.bars}/>
            <div className={s.links}>
            <a href="/">Home</a>
            <a href="#about">About me</a>
            <a href="#skills">Skills</a>
            <a href="#contacts">Contacts</a>
            </div>
        </Container>
    </nav>
  )
}
