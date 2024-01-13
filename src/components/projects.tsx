// ProjectCarousel.tsx

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Project {
  title: string;
  description: string;
  image: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Update this to display three projects at a time
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} />
        </div>
      ))}
    </Slider>
  );
};

export default ProjectCarousel;
