import React, { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Contact() {
  const [letterClass, setletterClass] = useState("text-animate");
  const refForm = useRef;
  const position = [51.505, -0.09]

  //   const sendForm = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm("gmail", "gmaid", refForm.current, "").then(
  //       () => {
  //         alert("massage sucessfully send!");
  //         window.location.reload(false);
  //       },
  //       (error) => {
  //         alert("error", error);
  //       }
  //     );
  //   };

  useEffect(() => {
    setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            excepturi rem doloremque at quam, voluptatibus qui perspiciatis eius
            natus enim?
          </p>
          <div className="contact-form">
            <form>
              <ul>
                {" "}
                {/*  ref={refForm} onSubmit={sendForm} */}
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="massage"
                    placeholder="Massage"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="button" value="Send" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Aman vadsariya,
          <br />
          Uk,
          <br />
          .... ... 00 postcode{" "},
          <br />
          london <br />
          <span>amnv0709@gmail.com</span>
        </div>
        <div className="map-wrap">
    <MapContainer center={position} zoom={13} >
        <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={position}>
                <Popup>
                    This is aman's address
                </Popup>
            </Marker>
    </MapContainer>

</div>
      </div>


      <Loader type="pacman" />
    </>
  );
}
