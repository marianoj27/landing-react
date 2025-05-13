import React from 'react'
import Personaje from "../../assets/Kaerath_Writing.png"
import Logo from "../../assets/Logo.png"
import {motion} from "framer-motion"
import { slipeUp, slipeInFromSide } from '../../utility/animation'

const Hero = () => {
  return (
    <section className='mt-36'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        
        <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <motion.img
           src={Logo} alt='Logo del personaje'
           variants={slipeUp(0.1)}
           initial="initial"
           animate="animate"/>
          <motion.p className='text-white py-12'
          variants={slipeUp(0.5)}
           initial="initial"
           animate="animate">
            He sobrevivido a una batalla contra 
            un espíritu en forma de calamar 
            que atacó el barco. 
            No estuve solo: luché junto al grupo 
            que el destino puso a mi lado. 
            Son buenos guerreros. 
            Todos salimos con vida, aunque durante el
             combate tuve que sanar a uno de ellos. 
             No permitiría que la muerte nos 
             arrebatara a un compañero de batalla.
          </motion.p>
          <motion.div className='flex justify-center gap-4'
          variants={slipeUp(1)}
           initial="initial"
           animate="animate">
            <a className='text-white py-2 px-12 rounded-3xl 
            bg-yellow-700 bg-opacity-30 backdrop-blur-md z-30
            hover:bg-yellow-900 transition-all duration-300'>
              Leer nota
              <i className="bi bi-journal-check text-xl ml-2"></i>
            </a>
            <a className='text-white py-2 px-12 rounded-3xl 
            bg-yellow-700 bg-opacity-30 backdrop-blur-md z-30
            hover:bg-yellow-900 transition-all duration-300'>Ver Diario
              <i className="bi bi-book-half text-xl ml-2">
              </i>
            </a>
          </motion.div>
        </div>
        
        <motion.div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-10'
        variants={slipeInFromSide("right", 0.5)}
           initial="initial"
           animate="animate">
          <img src={Personaje} alt='Personaje del Juego' className="rounded-lg"/>
        </motion.div>
        
      </div>
    </section>
  )
}

export default Hero