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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut asperiores cum laborum ipsa distinctio commodi ad ipsum facilis facere reiciendis tenetur voluptatum beatae quasi quisquam provident fugit accusamus, inventore officiis architecto est alias a? Eum.</p>
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
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;