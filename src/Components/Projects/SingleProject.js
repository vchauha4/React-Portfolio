import React from 'react';

const SingleProject = ({project}) => {
  const {img, title, description,technology, livesite, github } = project;
  return (
    <div className="project-container p-4 position-relative">
              <img className="w-100" src={img} alt=""/>
              <h5>{title}</h5>
              <p>{description}</p>
              {
                technology.map(tech => <span style={{fontSize:'10px'}} className="singleSkill">{tech}</span> )
              }
              <div className="project-links h-100 position-absolute top-0 start-0 w-100">
                <div className="h-100 d-flex justify-content-around align-items-center">
                <button className="btn brand-btn">github</button>
                <button className="btn brand-btn">Linkedin</button>
                </div>
              </div>
            </div>
  );
};

export default SingleProject;