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
            <p>In my role as a Data Engineer I have expanded my skillset through responsibilities <br></br>
            including: providing client support for prod projects, optimizing ETL processes<br></br>
            to reduce data processing time, improving data parsing quality, and independently<br></br>
            engineering core entity-score that I am the expert for on a current project. </p>
            <br></br>
            <h5>Data Science Associate - York University</h5>
            <p> Designed data visualization, regression, and cross-validation projects for a <br></br>Master's course with 20+ students.</p>
            <br></br>
            <h5>Software Developer Intern - CodeDay Labs</h5>
            <p> Led the development of a cross-platform React Native app, while mentoring two<br></br> 
            teammates in an agile workflow. Utilized the react-native-camera library for camera<br></br>
            access and front-end development. Designed the app logo using Procreate and<br></br>
            GIMP, and created a Figma prototype for product presentation.</p>
            <br></br>
            <h5>Senior Assistant - Allan I Carswell Observatory</h5>
            <p>Led the observatory team during outreach events, managing audiences of 100+<br></br>
            visitors of various expertise. Acquired sets of astronomical data for research projects<br></br>
            at the observatory and for graduate students. Analyzed and reduced the acquired<br></br>
            sets of optical data for observatory research.</p>
            <br></br>
            <h3 className="Projects">Projects:</h3>
            <br></br>
            <h5>ML Researcher - CIBC</h5>
            <p>Directing a thesis project exploring machine learning algorithms optimized for<br></br> 
            predictive fraud analytics. Goals involve detailed data mining, DQA, and applications<br></br>
            of statistical and ML algorithms. Will be using my analysis to compose a thesis<br></br> 
            summarizing my findings, with the potential for the research paper to be published<br></br>
            in a journal.</p>
            <br></br>
            <h5>Very-Unique-Pet - 3rd place overall Hacklarious</h5>
            <p>Conducted the development of an alarm clock with an interactive virtual pet and<br></br>
            web-app interface that allows control of the alarm clock. Set-up DNS records using<br></br>
            Google Cloud Platform and established a pub/sub server using Python.</p>
            <br></br>
            <h5>Ideation Challenge - KPMG</h5>
            <p>Collaborated within a team to design a product and deliver a pitch to a panel of<br></br>
            judges within 12 hours. Devised an Outlook extension using Machine Learning and<br></br> 
            Natural Language Processing to automate time-blocking.</p>
            <br></br>
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