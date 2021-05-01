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
          <h1>I Am Masum, a</h1>
          <h1>
            <span className="brand-text">
            <Typewriter
              options={{
              strings: ['web developer', 'web designer', 'react developer'],
              autoStart: true,
              loop: true,
              deleteSpeed:25,
              delay:50
              }}
            />
            </span>
          </h1>
          <div className="social-links">
            <button className="btn btn-success"><a href="github.com">Github <span><FontAwesomeIcon className="homeicon" icon={faGithub}></FontAwesomeIcon></span></a></button>
            <button className="btn btn-danger"><a href="linkedin.com">Linkedin <span><FontAwesomeIcon className="homeicon" icon={faLinkedin}></FontAwesomeIcon></span></a></button>
          </div>
          <button className="btn brand-btn">Download Resume <span><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></span></button>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;