import React from "react";
import {
  ecommerce,
  poele,
  reactMovies,
  ajacob,
  covid19
} from "../assets/images";

const ProjectCard = ({ title, desc, img, link, code }) => (
  <div className="container mb-4" id="projects">
    <div className="row align-items-center">
      <div className="col-md-7 col-sm-12" data-aos="fade-right">
        <div className="proj ">
          <div className="proj-card ">
            <h2>{title}</h2>
            <p>{desc}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="view">View Project</button>
            </a>
          </div>
        </div>
      </div>
      {/* img */}

      <div className="col-md-5 col-sm-12 h-25" data-aos="fade-left">
        <a href={img} target="_blank" rel="noopener noreferrer">
          <div className="proj-rect">
            <img src={img} alt="project" />
          </div>
        </a>
      </div>
    </div>
  </div>
);

export const Projects = () => {
  return (
    <section className="container projects-section">
      <div className=" mb-4 d-flex flex-column  justify-content-center align-items-center">
        <h1>Projects</h1>
      </div>
      {projectsData.map(proj => (
        <ProjectCard
          title={proj.title}
          desc={proj.desc}
          img={proj.img}
          link={proj.link}
          code={proj.code}
        />
      ))}
    </section>
  );
};

const projectsData = [
  {
    title: "Poele Restaurant",
    desc:
      "Website design for Tropical restaurant in the Dominican Republic. The sketch was drawn using Figma. The Live version of the website is currently under construction.",
    img: poele,
    link: poele,
    code: poele
  },
  {
    title: "Book Store (MERN)",
    desc:
      "A book store E-commerce front end implenmented using the MERN(MongoDB, ExpressJS, React and NodeJS) stack, Codesandbox and Netlify. The REST Backend is running in my Linux VPS. It serves data for an Admin dashboard at the physical book store.",
    img: ecommerce,
    link: "https://booksfrontend.netlify.com/",
    code: "https://codesandbox.io/s/store-frontend-r48z1"
  },
  {
    title: "IMDb Movies",
    desc:
      "An user interface for the IMDb movies API with filtering options and pagination. This project was developed using ReactJS for the frontend and NodeJS for serving the static files.",
    img: reactMovies,
    link: "https://movies.robertmsoriano.com/",
    code: "https://github.com/robertomsoriano/react-movies"
  },

  {
    title: "Covid-19",
    desc:
      "React application for displaying COVID-19 data. API calls are made to retrieve the data from external sources. Data is displayed using line and bacr charts. Users could browse by country.",
    img: covid19,
    link: "https://covidstatstracker.netlify.app",
    code: "https://covidstatstracker.netlify.app"
  },
  {
    title: "AJacob",
    desc:
      "AJacob, a web development agency. This is a custom made Bootstrap template, responsive for desktop, tablet and mobile. Some of the features implemented are form validation and on scroll animation.",
    img: ajacob,
    link: "https://ajacob.netlify.app/",
    code: "https://ajacob.netlify.app/"
  }
];
