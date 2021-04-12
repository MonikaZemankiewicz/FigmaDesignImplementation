import React from "react";
import Modal from "react-modal";
import closebtn from "../assets/closebtn.svg";
import fbsquare from "../assets/fbsquare.svg";
import linkedinsquare from "../assets/linkedinsquare.svg";

const Item = ({ name, image, desc, position }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <section>
      <div className="team__item">
        <img
          onClick={() => setModalIsOpen(true)}
          className="team_profile-pic"
          src={image}
          alt="profile picture"
        />
        <h2 className="team__name">{name}</h2>
        <span className="team__position">{position}</span>
        <p className="team__short-desc">{desc}</p>
        <div className="team__icons">
          <a href="https://www.facebook.com/">
            <img className="team__icons__img" src={fbsquare} alt="facebook" />
          </a>
          <a href="https://www.linkedin.com">
            <img
              className="team__icons__img"
              src={linkedinsquare}
              alt="linkedin"
            />
          </a>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
        className="team__modal"
        style={{
          overlay: {
            position: "fixed",
            top: 0,
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
        <div className="modal__info">
          <h2 className="modal__name">{name}</h2>
          <span className="modal__position">{position}</span>
          <p className="modal__desc">{desc}</p>
        </div>
      </Modal>
    </section>
  );
};

export default Item;
