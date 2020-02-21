import React from "react";

export const Hero = () => {
  return (
    <header>
      <div className="container " id="home">
        <div className="row">
          <div className="col-md-7 col-sm-12" data-aos="fade-right">
            <h1>Roberto Soriano.</h1>
            <p>
              I'm a software developer and UX/UI designer living in northeastern
              Massachusetts. I specialize in building web applications using
              JavaScript and React. I have a Data Analytics Nanodegree and
              DevOps (AWS and GCP) experience with Docker.
              <br />
            </p>
            <p>
              I also enjoy working on the backend with NodeJS. I know my way
              around the Bash terminal. I have proficient skills in database
              setup, authentication and Linux server maintainance.
            </p>
            <p>
              I enjoy DevOps! This site is running on Google Cloud App Engine
              (migrated from a Docker Container running on my VPS). The Contact
              form on the bottom triggers an AWS Lambda function which sends me
              an email with the all data you enter using AWS SES.
            </p>
            <h2 className="motto">
              My passion is to develop applications that save energy, time and
              money!
            </h2>
            <div className="top-nav">
              <h2>Check Me Out</h2>
              <ul>
                <li className="link">
                  <a href="#about">About</a>
                </li>
                <li className="link">
                  <a href="#projects">Projects</a>
                </li>
                <li className="link">
                  <a
                    href="https://github.com/robertomsoriano"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li className="link">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
