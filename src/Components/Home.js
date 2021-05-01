import { motion } from 'framer-motion';
import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <motion.div 
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.5}}
      transition={{duration: 0.8}}
    >
      
      <div style={{height:'100vh', marginTop:'-56px'}}>
        <div className="home-content-container h-100 d-flex flex-column align-items-center justify-content-center">
          <h1>Hi,</h1>
          <h1>I Am Masum, a</h1>
          <h1>
            <span className="brand-text">
            <Typewriter
              options={{
              strings: ['web developer', 'web designer', 'react developer'],
              autoStart: true,
              loop: true,
              }}
            />
            </span>
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;