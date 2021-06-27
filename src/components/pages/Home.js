import React from 'react';
import './home.css';
import {AnimatePresence, motion} from 'framer-motion';
import wc from '../../WC.png';

function Home() {
  return (
  <AnimatePresence exitBeforeEnter>
  <motion.div
  initial={{scaleY:0}}
  animate={{scaleY:1}}
  exit={{scaleY:0}}
  transition={{duration:0.5}}>
   <div class="home">
      <div class="glass">
            <div class="landing">
                <h1>ROTARACT CLUB</h1>
                <h5>OF </h5>
                <h6> PARUL UNIVERISTY</h6>
                <img src={wc}alt= "" class="logo"></img>
            </div>
        </div>          
   </div> 
  </motion.div>    
  </AnimatePresence> 
  )
}

export default Home;

