import React, { useState } from "react";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteBike } from "../Redux/Features/Bike.Slice";
import UpdateModal from "./UpdateModal";

const DisplayModal = ({ setShowModal, ID }) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const dispatch = useDispatch();
  const allBikes = useSelector((state) => state.app.bikes);
  const [displayBike] = allBikes.filter((bike) => bike.id === ID);
  return (
    <div className="modalBackground">
      {showUpdateModal && (
        <UpdateModal setShowUpdateModal={setShowUpdateModal} ID={ID} />
      )}
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>Bike Details</h1>
        </div>
        <div className="body d-flex flex-column gap-3">
          <table
            border="1"
            className="mx-auto"
            style={{ minWidth: "60%", paddingInline: "5%", paddingBlock: "5%" }}
          >
            <thead>
              <tr>
                <th>Particulars</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brand</td>
                <td>{displayBike.manufacturer}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{displayBike.name}</td>
              </tr>
              <tr>
                <td>Engine Displacement</td>
                <td>{displayBike.engineDisplacement} cc</td>
              </tr>
              <tr>
                <td>Torque</td>
                <td>{displayBike.torque} nm</td>
              </tr>
              <tr>
                <td>Power</td>
                <td>{displayBike.power} BHP</td>
              </tr>
              <tr>
                <td>Tank Capacity</td>
                <td>{displayBike.fuelTank} Litre</td>
              </tr>
              <tr>
                <td>Gearbox</td>
                <td>{displayBike.gearbox} Speed Manual</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>
                  {Number(displayBike.price).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footer">
          <button
            id="deleteBtn"
            onClick={() => [dispatch(deleteBike(ID)), setShowModal(false)]}
          >
            Delete
          </button>
          <button id="editBtn" onClick={() => setShowUpdateModal(true)}>
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayModal;
