import React from 'react'
import Container from '../components/UI/Container'
import s from './style.module.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



export default function Footer() {
  return (
    <footer >
    <Container className={s.container}>
        <h2 id='contacts'>Contacts</h2>
        <div className={s.message}>
        <p>Want to know more or just chat? </p>
        <p>You are welcome!</p>
        </div>
        <button>Send message</button>
        <div className={s.icons}>
            <FaLinkedin/>
            <FaTelegram/>
            <FaWhatsapp/>
        </div>
        <p className={s.text}>Like me on LinkedIn, Telegram, Whatsapp</p>
    </Container>
    </footer>
  )
}

