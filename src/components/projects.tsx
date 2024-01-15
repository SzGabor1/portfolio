import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/projects.css';

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
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1178,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="project-slide">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <img
                src={project.image}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;
