import { faBox, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./About.scss";

const About = () => {
  const [letterClass, setletterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
            facilis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
            facilis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
            facilis?
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubeSpinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBox} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faBox} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faBox} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faBox} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faBox} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faBox} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>{" "}
    <Loader type="pacman"/>
    </>
  );
};

export default About;
