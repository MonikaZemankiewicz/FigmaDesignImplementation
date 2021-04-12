import React, { useState } from "react";
import arrow from "../assets/arrow.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import play from "../assets/play.svg";
import { graphql, useStaticQuery } from "gatsby";
import Modal from "react-modal";
import Video from "../components/Video";
import closebtn from "../assets/closebtn.svg";
import Image from "gatsby-image";

const query = graphql`
  {
    file(relativePath: { eq: "video.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <header className="hero">
      <div className="hero__text">
        <h1>
          The first <nobr>fully-automatic</nobr> social crypto trading platform
          with real crypto currency
        </h1>
      </div>
      <div className="newsletter">
        <p>Subscribe and get the latest information</p>
        <form>
          <div className="hero__form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-control hero__form-control "
            />
            <button type="submit" className="hero__submit-btn btn">
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div className="arrow">
        <a href="/#Team">
          <img className="arrow__img" src={arrow} alt="logo " />
        </a>
      </div>
      <div className="social-media">
        <a href="https://twitter.com/">
          <img className="social-media__img" src={twitter} alt="twitter" />
        </a>
        <a href="https://www.facebook.com/">
          <img className="social-media__img" src={facebook} alt="facebook" />
        </a>
      </div>
      <div className="video-container">
        <button
          className="video-container__play-button"
          onClick={() => setModalIsOpen(true)}
        >
          <img src={play} alt="play" />
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
        style={{
          overlay: {
            position: "fixed",
            top: 73,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(37, 43, 66, 0.5)",
            zIndex: 300,
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <button
          className="modal__close-btn"
          onClick={() => setModalIsOpen(false)}
        >
          <img src={closebtn} alt="close modal" />
        </button>
        <Video
          videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
          videoTitle="Official Music Video on YouTube"
        />
      </Modal>
    </header>
  );
};

export default Hero;
