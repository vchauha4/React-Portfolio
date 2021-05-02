import React from 'react';

const SingleProject = ({project}) => {
  const {img, title, description, livesite, github} = project;
  return (
    <div className="project-container p-4 position-relative">
              <img className="w-100" src={img} alt=""/>
              <h4>{title}</h4>
              <p>{description}</p>
              <div className="project-links h-100 position-absolute top-0 start-0 w-100">
                <div className="h-100 d-flex justify-content-around align-items-center">
                <button className="btn btn-danger">github</button>
                <button className="btn btn-danger">Linkedin</button>
                </div>
              </div>
            </div>
  );
};

export default SingleProject;