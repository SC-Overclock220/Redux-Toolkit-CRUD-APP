import React, { useState } from "react";

const BikeCard = ({ bike, setShowModal, ID, setID,index }) => {
  return (
    <div className="card text-center" style={{ minWidth: "18rem" }}>
      <div className="card-body">
        <h2 className="card-title">
          {index < 10 ? `0${index}` : `${index}`}
        </h2>
        <h4>{bike.manufacturer}</h4>
        <h6>{bike.name}</h6>
        <button
          className="btn btn-success"
          onClick={() => [setShowModal(true), setID(bike.id)]}
        >
          Check Details
        </button>
      </div>
    </div>
  );
};

export default BikeCard;
