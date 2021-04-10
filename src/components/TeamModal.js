import React from "react";
import closebtn from "../assets/closebtn.svg";

export const TeamModal = ({ modalIsOpen, setModalIsOpen, name, desc }) => {
  return (
    <>
      {modalIsOpen ? (
        <div className="modal">
          <div className="modal-content">
            <button
              className="close-modal"
              onClick={() => setModalIsOpen(false)}
            >
              <img src={closebtn} alt="close modal" />
            </button>
            <div className="modal-info">
              <h2>{name}</h2>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
