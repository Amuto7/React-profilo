import React from "react";
import "./index.scss";
import LogoTitle from "../../assets/images/logo-sA.png";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setletterClass] = useState('text-animate');
    const namearry = ['m','a','n']
    const jobarry =['w','e','b',' ', 'd','e','v','e','l','o','p','e','r', '.']

    useEffect(() => {

      setTimeout(() => {
        setletterClass('text-animate-hover')
      }, 4000);
      
    }, []);


  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={`${letterClass} _11`}>h</span> 
          <span className={`${letterClass} _12`}>i,</span> 
          <br />
          <span className={`${letterClass} _13`}>I'</span> 
          <span className={`${letterClass} _14`}>m</span> 
          <img src={LogoTitle} alt="des" />
          <AnimatedLetters letterClass={letterClass} idx={15} strArray={namearry} />
          <br />
          <AnimatedLetters letterClass={letterClass} idx={18} strArray={jobarry} />

        </h1>
        <h2>Frontend Developer / React </h2>

        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo/>
    </div> 
    <Loader type="pacman"/>
    
       </>

  );
};

export default Home;
