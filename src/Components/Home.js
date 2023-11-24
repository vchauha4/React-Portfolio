import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faTshirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <motion.div 
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.5}}
      transition={{duration: 0.5}}
    >
      
      <div style={{height:'100vh', marginTop:'-56px'}}>
        <div className="home-content-container h-100 d-flex flex-column align-items-center justify-content-center">
          <h1>Hi,</h1>
          <h1>I am Palvisha, a</h1>
          <h1>
            <span className="brand-text">
            <Typewriter
              options={{
              strings: ['Data Engineer', 'ML Reasearcher', 'Avid Crocheter'],
              autoStart: true,
              loop: true,
              deleteSpeed:25,
              delay:50
              }}
            />
            </span>
          </h1>
          <div className="social-links mt-">
            <button className="btn btn-dark m-3"><a target="_blank" href="https://github.com/palvisha13">Github <span><FontAwesomeIcon className="homeicon" icon={faGithub}></FontAwesomeIcon></span></a></button>
            <button className="btn btn-primary m-3"><a target="_blank" href="https://www.linkedin.com/in/palvisha-sharma/">Linkedin <span><FontAwesomeIcon className="homeicon" icon={faLinkedin}></FontAwesomeIcon></span></a></button>
          </div>
          <a target="_blank" href="https://drive.google.com/file/d/1k8kZjIzx7rqoENFm2G86yJ2qxq_6I_f0/view?usp=drive_link"><button className="btn brand-btn">Download Resume <span><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></span></button></a>
        </div>
        
      </div>
    </motion.div>
  );
};

export default Home;