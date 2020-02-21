import React from "react";
import poele from "../assets/Poele.png";
import bookstore from "../assets/ecommerce.png";
import reactmovies from "../assets/react-movies.jpg";
import weather from "../assets/weather.jpg";
export const Projects = () => {
  return (
    <section className="container projects-section">
      <div className=" mb-4 d-flex flex-column  justify-content-center align-items-center">
        <h1>Projects</h1>
      </div>
      <div className="container mb-4" id="projects">
        <div className="row">
          <div className="col-md-7 col-sm-12" data-aos="fade-right">
            <div className="proj ">
              <div className="proj-card ">
                <h2>Poele Restaurant</h2>
                <p>
                  Website design for Tropical restaurant in the Dominican
                  Republic. The sketch was drawn using Figma. The Live version
                  of the website is currently under construction.
                </p>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className="view">View Project</button>
                </a>
              </div>
            </div>
          </div>
          {/* ---------- */}

          <div className="col-md-5 col-sm-12 h-25" data-aos="fade-left">
            <a href={poele} target="_blank" rel="noopener noreferrer">
              <div className="proj-rect">
                <img src={poele} alt="project" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="container mb-4" id="projects">
        <div className="row">
          <div className="col-md-7 col-sm-12" data-aos="fade-right">
            <div className="proj ">
              <div className="proj-card ">
                <h2>Book Store app</h2>
                <p>
                  A book store E-commerce front end implenmented using the{" "}
                  <strong>MERN</strong>
                  (MongoDB, ExpressJS, <strong>React</strong> and NodeJS) stack,
                  Codesandbox and Netlify. The REST Backend is running in my
                  Linux VPS. It serves data for an Admin dashboard at the
                  physical book store.
                </p>
                <a
                  href="https://booksfrontend.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="view">View Project</button>
                </a>
              </div>
            </div>
          </div>
          {/* ---------- */}
          <div className="col-md-5 col-sm-12 h-25" data-aos="fade-left">
            <a href={bookstore} target="_blank" rel="noopener noreferrer">
              <div className="proj-rect">
                <img src={bookstore} alt="project" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="container mb-4" id="projects">
        <div className="row">
          <div className="col-md-7 col-sm-12" data-aos="fade-right">
            <div className="proj ">
              <div className="proj-card ">
                <h2>IMDB Movies</h2>
                <p>
                  An user interface for the IMDb movies API with filtering
                  options and pagination. This project was developed using
                  ReactJS for the frontend and NodeJS for serving the static
                  files.
                </p>
                <a
                  href="https://movies.robertmsoriano.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="view">View Project</button>
                </a>
              </div>
            </div>
          </div>
          {/* ---------- */}
          <div className="col-md-5 col-sm-12 h-25" data-aos="fade-left">
            <a href={reactmovies} target="_blank" rel="noopener noreferrer">
              <div className="proj-rect">
                <img src={reactmovies} alt="project" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="container mb-4" id="projects">
        <div className="row">
          <div className="col-md-7 col-sm-12" data-aos="fade-right">
            <div className="proj ">
              <div className="proj-card ">
                <h2>Weather App</h2>
                <p>
                  Simple weather app that calls a REST API to get weather data.
                  Users could query API with their zipcode and toggle between
                  celsius and fahrenheit degrees.
                </p>
                <a
                  href="https://weather.robertmsoriano.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="view">View Project</button>
                </a>
              </div>
            </div>
          </div>
          {/* ---------- */}
          <div className="col-md-5 col-sm-12 h-25" data-aos="fade-left">
            <a href={weather} target="_blank" rel="noopener noreferrer">
              <div className="proj-rect">
                <img src={weather} alt="project" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
