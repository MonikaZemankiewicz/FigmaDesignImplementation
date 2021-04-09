import React, { useState } from "react";
import Modal from "react-modal";
import closebtn from "../assets/closebtn.svg";

const Item = ({ name, image, desc, position }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <section>
      <div onClick={() => setModalIsOpen(true)} className="item">
        <img src={image} alt="twitter" />
        <h2>{name}</h2>
        <span>{position}</span>
        <p>{desc}</p>
      </div>{" "}
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
        <button className="close-modal" onClick={() => setModalIsOpen(false)}>
          <img src={closebtn} alt="close modal" />
        </button>
        <div className="modal-info">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </Modal>
    </section>
  );
};

export default Item;
