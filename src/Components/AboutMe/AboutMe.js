import { faDatabase, faBrain, faDesktop, faDownload} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import bg from '../images/bg.jpg'

const AboutMe = () => {
  return (
    <motion.div 
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.5}}
      transition={{duration: 0.5}}
    >
    <div className="container pb-5">
      <div className="row">
        <h1 className="brand-text mb-5">About Me</h1>
        <div className="col-md-8">
          <h2 className="text-white mb-3">Data Engineer</h2>
          <p className="text-white">
          Hi everyone! Welcome to my portfolio! My name is Palvisha, and I graduated
          with a degree in Physics in 2022. Since then (~1.5 years), I have been working 
          as a Data Engineer while completing a second degree in Computer Science. Currently,
          I am completing a thesis project on ML algorithms in fraud analytics with CIBC bank as 
          part of my degree. It's safe to say: I love all things Data!<br/><br/>
          </p>
        </div>
        <div className="col-md-4">
          <h4 className="mb-4">Personal Information</h4>
          <p><span className="brand-text">Name: </span>Palvisha Sharma</p>
          <p><span className="brand-text">Email: </span>sharmapalvisha@gmail.com</p>
          <p><span className="brand-text">Location: </span>Toronto, ON</p>
          <a target="_blank" href="https://drive.google.com/file/d/1k8kZjIzx7rqoENFm2G86yJ2qxq_6I_f0/view?usp=drive_link">
          <button className="btn brand-btn mt-5">Download Resume <span><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></span></button>
          </a>
        </div>
      </div>
        <h3 className="text-center mt-5">Services</h3>
      <div className="row mt-5 text-center mb-5">
        <div className="col-md-4">
          <div className="service-box">
            <FontAwesomeIcon className="myicon" icon={faDatabase}></FontAwesomeIcon>
            <h4>Data Engineering</h4>
            <p>
            I can design ETL pipelines, integration tests for new data sources, and implement end-to-end testing, to ensure that businesses decisions are made on data with the best quality possible.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-box">
            <FontAwesomeIcon className="myicon" icon={faBrain}></FontAwesomeIcon>
            <h4>Machine Learning</h4>
            <p>
            Can feature engineer and configure various black-box and white-box ML algorithms. I am currently trying out image classification techniques on the Galaxy Zoo2 data. 
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-box">
            <FontAwesomeIcon className="myicon" icon={faDesktop}></FontAwesomeIcon>
            <h4>Web Development</h4>
            <p>
            Have a solid background in developing fully responsive websites from scratch using ReactJS, as well as dashboarding tools in Angular to compliment my work as a Data Engineer.
            </p>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default AboutMe;