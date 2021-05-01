import { faDesktop, faDownload, faEye, faMobile } from '@fortawesome/free-solid-svg-icons';
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
          <h2 className="text-white mb-3">UI/UX Designer and Developer</h2>
          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus repellendus illum laborum atque a officiis, aliquam consectetur, magni totam quaerat doloribus enim dignissimos earum reprehenderit ut qui perferendis. Animi nulla exercitationem maxime dolor dignissimos. Nisi incidunt vitae ipsa corporis consequuntur non, sit harum atque porro fuga obcaecati nam aperiam esse.</p>
        </div>
        <div className="col-md-4">
          <h4 className="mb-4">Personal Information</h4>
          <p><span className="brand-text">Name: </span>Md. Masum Billah</p>
          <p><span className="brand-text">Age: </span>24</p>
          <p><span className="brand-text">Address: </span>Jessore, Khulna, Bangladesh</p>
          <p><span className="brand-text">Email: </span>masummim50@gmail.com</p>
          <a target="_blank" href="https://drive.google.com/u/0/uc?id=1Iog7pdvkCA3HFp0iDyczZ5wP5zd2G-3q&export=download">
          <button className="btn brand-btn mt-5">Download Resume <span><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></span></button>
          </a>
        </div>
      </div>
        <h3 className="text-center mt-5">Services</h3>
      <div className="row mt-5 text-center mb-5">
        <div className="col-md-4">
          <div className="service-box">
            <FontAwesomeIcon className="myicon" icon={faDesktop}></FontAwesomeIcon>
            <h4>Web Development</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti exercitationem impedit laborum eligendi doloremque quis in modi accusantium similique ipsam, sunt voluptate nihil aspernatur molestiae.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-box">
            <FontAwesomeIcon className="myicon" icon={faMobile}></FontAwesomeIcon>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti exercitationem impedit laborum eligendi doloremque quis in modi accusantium similique ipsam, sunt voluptate nihil aspernatur molestiae.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-box">
            <FontAwesomeIcon className="myicon" icon={faEye}></FontAwesomeIcon>
            <h4>Responsive Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti exercitationem impedit laborum eligendi doloremque quis in modi accusantium similique ipsam, sunt voluptate nihil aspernatur molestiae.</p>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default AboutMe;