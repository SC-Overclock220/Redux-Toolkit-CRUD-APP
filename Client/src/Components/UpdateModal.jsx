import React, { useState } from "react";
import "./UpdateModal.css";
import { useDispatch, useSelector } from "react-redux";
import { updateBike } from "../Redux/Features/Bike.Slice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateModal = ({ setShowUpdateModal, ID }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allBikes = useSelector((state) => state.app.bikes);

  console.log(ID);

  const [targetBike] = allBikes.filter((bike) => bike.id === ID);

  const [updateFormData, setUpdateFormData] = useState({
    name: targetBike.name,
    manufacturer: targetBike.manufacturer,
    origin: targetBike.origin,
    engineDisplacement: targetBike.engineDisplacement,
    gearbox: targetBike.gearbox,
    power: targetBike.power,
    torque: targetBike.torque,
    fuelTank: targetBike.fuelTank,
    price: targetBike.price,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUpdateFormData({ ...updateFormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      manufacturer,
      origin,
      engineDisplacement,
      gearbox,
      torque,
      price,
      fuelTank,
      power,
    } = updateFormData;

    if (
      !name ||
      !manufacturer ||
      !origin ||
      !engineDisplacement ||
      !gearbox ||
      !torque ||
      !price ||
      !fuelTank ||
      !power
    )
      return toast.error("None Of The Required Fields Can Be Empty!");

    setShowUpdateModal(false);

    updateFormData.id = ID;

    dispatch(updateBike(updateFormData));
    toast.success("Bike Updated Successfully");
    navigate("/");
  };
  return (
    <div className="updateModalBackground">
      <div className="updateModalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setShowUpdateModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>Update Bike Details</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={updateFormData.name}
              onChange={handleInputChange}
              placeholder="Bike Model Name"
            />
            <div id="emailHelp" className="form-text">
              Enter Bike Model Name.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="manufacturer" className="form-label">
              Manufacturer
            </label>
            <input
              type="text"
              className="form-control"
              id="manufacturer"
              name="manufacturer"
              value={updateFormData.manufacturer}
              onChange={handleInputChange}
              placeholder="Bike Manufacturer Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="origin" className="form-label">
              Origin
            </label>
            <input
              type="text"
              className="form-control"
              id="origin"
              name="origin"
              value={updateFormData.origin}
              onChange={handleInputChange}
              placeholder="Bike Origin Country Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="engineDisplacement" className="form-label">
              Engine Displacement
            </label>
            <input
              type="text"
              className="form-control"
              id="engineDisplacement"
              name="engineDisplacement"
              value={updateFormData.engineDisplacement}
              onChange={handleInputChange}
              placeholder="Engine Displacement In CC"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gearbox" className="form-label">
              Gear Box
            </label>
            <input
              type="text"
              className="form-control"
              id="gearbox"
              name="gearbox"
              value={updateFormData.gearbox}
              onChange={handleInputChange}
              placeholder="Manual Gearbox"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="torque" className="form-label">
              Torque
            </label>
            <input
              type="text"
              className="form-control"
              id="torque"
              name="torque"
              value={updateFormData.torque}
              onChange={handleInputChange}
              placeholder="Torque In NM"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="power" className="form-label">
              Power
            </label>
            <input
              type="text"
              className="form-control"
              id="power"
              name="power"
              value={updateFormData.power}
              onChange={handleInputChange}
              placeholder="Power In BHP"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              value={updateFormData.price}
              onChange={handleInputChange}
              placeholder="Price In INR ₹"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fuelTank" className="form-label">
              Fuel Tank
            </label>
            <input
              type="text"
              className="form-control"
              id="fuelTank"
              name="fuelTank"
              value={updateFormData.fuelTank}
              onChange={handleInputChange}
              placeholder="Fuel Tank Capacity In Litres"
            />
          </div>
          <div className="footer">
            <button className="btn btn-primary" type="submit">
              Update Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
