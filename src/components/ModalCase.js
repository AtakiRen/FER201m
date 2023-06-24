import React from "react";
import { useState, useEffect, useRef } from "react";
import "./css/ModalCase.css";
export default function ModalCase({ setIsOpen, player }) {
  return (
    <div
      className="modal-show"
      onClick={() => {
        setIsOpen(false);
      }}
      style={{
        marginBottom: "20px",
      }}
    >
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>
            Trailer Best Player for{" "}
            <span style={{ fontStyle: "italic", fontWeight: "500" }}>
              {player.name}
            </span>{" "}
          </h4>
          <p>
            <iframe
              width="100%"
              height="100%"
              src={player.clip}
              title={player.name}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </p>
        </div>
        <span className="modal-close">&#10006;</span>
      </div>
    </div>
  );
}
