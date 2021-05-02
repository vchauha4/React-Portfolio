import React from 'react';
import Masonry from 'react-masonry-css';
import './Projects.css';
import artmaker from '../images/artmaker.png';
import library from '../images/library.png';
import food from '../images/food.png';
import transport from '../images/transport.png';
import slider from '../images/slider.png';
import { motion } from 'framer-motion';
import SingleProject from './SingleProject';

const Projects = () => {
  const projects = [
    {img: artmaker, title: 'Full stack website', description:'slf sldkfjsl slkdfjslkdj', livesite: 'link', github: 'link'},
    {img: food, title: 'Full stack website', description:'slf sldkfjsl slkdfjslkdj', livesite: 'link', github: 'link'},
    {img: library, title: 'Full stack website', description:'slf sldkfjsl slkdfjslkdj', livesite: 'link', github: 'link'},
    {img: transport, title: 'Full stack website', description:'slf sldkfjsl slkdfjslkdj', livesite: 'link', github: 'link'},
    {img: slider, title: 'Full stack website', description:'slf sldkfjsl slkdfjslkdj', livesite: 'link', github: 'link'}
  ]
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 1
  };
  return (
    <motion.div 
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.5}}
      transition={{duration: 0.5}}
    >
      <div className="container">
          
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
              {
                projects.map(project => <SingleProject project={project}></SingleProject>)
              }
        </Masonry>
      </div>
        </motion.div>
  );
};

export default Projects;