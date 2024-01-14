import React from 'react'
import s from './style.module.css'
import Container from '../UI/Container'
import photo from './photo.jpeg'



export default function Main() {
  return (
   <main className={s.main}>
      <Container >
         <div className={s.container}>
         <div className={s.name}>
            <p>Mustaphaev</p>
            <p>Kiamran</p>
          </div>
            <div className={s.descr}>
              <h1>web developer</h1>
              <p>33 years old,Marl 45770</p>
            </div>
              <div className={s.btns}>
                |<button>RU</button>|<button>ENG</button>|
              </div>

         </div>
              <img src={photo} alt="delevoper" />
        </Container>
        
   </main>
  )
}
