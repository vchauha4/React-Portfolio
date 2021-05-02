import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';

const Resume = () => {
  const frontendskills = ['HTML5', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'REACT.JS', 'REACT ROUTER']
  const backendskills = ['NODE.JS', 'EXPRESS', 'MONGODB', 'FIREBASE', 'HEROKU'];
  const familiar = ['REACT NATIVE', 'PHP', 'WORDPRESS', 'NEXT.JS', 'REDUX']
  return (
    <motion.div 
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.5}}
      transition={{duration: 0.5}}
    >
      <div style={{minHeight:'100vh'}} className="container">
        <div className="row">
          <h1 className="brand-text mb-5">My Resume</h1>
          <div className="col-md-7">
            <p>
              My expertise are in frontend technologies such as HTML5, CSS, BOOTSTRAP,
              JAVASCRIPT, REACT. I am comfortable with backend technologies such as NODE,
              EXPRESS, MONGODB, FIREBASE that allows me to work with a backend team
              efficiently.<br/><br/>
              I am a solution-focused
              developer with the ability to develop interactive and responsive websites that
              satisfies a user’s experience.
            </p>
          </div>
          <div className="col-md-5">
            <h3 className="skills">My Skillset:</h3>
            <h4 className="brand-text">Frontend skills: </h4> 
            {
              frontendskills.map(skill=> <span className="singleSkill">{skill}</span>)
            }
            <h4 className="brand-text">Backend skills: </h4>
            {
              backendskills.map(skill => <span className="singleSkill">{skill}</span> )
            }
            <h4 className="brand-text">Familiar with: </h4>
            {
              familiar.map(skill => <span className="lowskill">{skill}</span> )
            }
            <a target="_blank" href="https://drive.google.com/u/0/uc?id=1Iog7pdvkCA3HFp0iDyczZ5wP5zd2G-3q&export=download">
          <button className="btn brand-btn mt-5">Download Resume <span><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></span></button>
          </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;