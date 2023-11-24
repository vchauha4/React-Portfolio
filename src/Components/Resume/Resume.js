import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';

const Resume = () => {
  const frontendskills = ["Scala", "Java", "Python", "MATLAB", "HTML/CSS", "JavaScript"]
  const backendskills = ["Apache Spark", "Hadoop", "PySpark", "Airflow", "ReactJS", "Git", "Google Cloud", "Jupyter Notebook"];
  const familiar = ["Scala: Rock the JVM", "Apache Spark 3: Spark programming in Python for Beginners", "Quantexa Certified Data Engineer", "Quantexa Certified Scoring Engineer"]
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
            <h3 className="Experience">Experience:</h3>
            <br></br>
            <h5>Data Engineer - Quantexa</h5>
            <h5>Data Science Associate - York University</h5>
            <h5>Software Developer Intern - CodeDay Labs</h5>
            <h5>Senior Assistant - Allan I Carswell Observatory</h5>
            <br></br>
            <h3 className="Projects">Projects:</h3>
            <br></br>
            <h5>ML Researcher - CIBC</h5>
            <h5>Very-Unique-Pet - 3rd place overall Hacklarious</h5>
            <h5>Ideation Challenge - KPMG</h5>
          </div>
          <div className="col-md-5">
            <h3 className="skills">Technical Skills:</h3>
            <h4 className="brand-text">Programming Languages: </h4> 
            {
              frontendskills.map(skill=> <span className="singleSkill">{skill}</span>)
            }
            <h4 className="brand-text">Tools/Frameworks: </h4>
            {
              backendskills.map(skill => <span className="singleSkill">{skill}</span> )
            }
            <h4 className="brand-text">Certifications: </h4>
            {
              familiar.map(skill => <span className="lowskill">{skill}</span> )
            }
            <a target="_blank" href="https://drive.google.com/file/d/1k8kZjIzx7rqoENFm2G86yJ2qxq_6I_f0/view?usp=drive_link">
          <button className="btn brand-btn mt-5">Download Resume <span><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></span></button>
          </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;