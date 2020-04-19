import React from "react";

export const Hero = () => {
  return (
    <header>
      <div className="container " id="home">
        <div className="row">
          <div className="col-md-7 col-sm-12" data-aos="fade-right">
            <h2>Hey There! my name is</h2>
            <h1>Roberto Soriano.</h1>
            <p>
              I'm a software developer and UX/UI designer that specializes in
              building web applications using JavaScript, React, and serverless
              technologies.
              <br />
            </p>
            <p>
              I also enjoy working on the backend with NodeJS, Express and
              GraphQL. I know my way around the Bash terminal. I have proficient
              skills in database setup, authentication (with JWTs) and basic
              Linux server maintainance.
            </p>
            <p>
              What about DevOps? This site is running on Google Cloud App
              Engine, migrated from a Docker Container running on my private
              server. The Contact form on the bottom of this page triggers an
              AWS Lambda function which sends me an email with the all data you
              submit, using AWS SES.
            </p>
            <p>
              <a
                href="https://robertmsoriano-assets.s3.us-east-2.amazonaws.com/Roberto+Soriano.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#c33764" }}
              >
                View my Resume
              </a>
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
