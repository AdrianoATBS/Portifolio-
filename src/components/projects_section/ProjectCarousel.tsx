import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";
import { info } from "../../data/info";

interface ProjectCarouselProps {
  projects: (typeof info)["projects"];
}

export default function ProjectCarousel(props: ProjectCarouselProps) {
  const { projects } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-primary dark:bg-dk-primary p-4 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-secondary">Meus Projetos</h1>
      <div className="slider-container w-5/6">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-2">
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </div>
      <a href="/projetos" className="text-secondary hover:underline">Ver Mais Projetos</a>
    </div>
  );
}