import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createBike } from "../Redux/Features/Bike.Slice";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    manufacturer: "",
    origin: "",
    engineDisplacement: "",
    gearbox: "",
    torque: "",
    price: "",
    fuelTank: "",
    power: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
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
    } = formData;

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

    console.log(formData);

    dispatch(createBike(formData));
    toast.success("Bike Created Successfully");
    navigate("/");
  };
  return (
    <>
      <form className="w-50 mx-auto mt-4" onSubmit={handleSubmit}>
        <h2 className="my-2 mx-auto text-center">Enter Bike Details</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
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
            value={formData.manufacturer}
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
            value={formData.origin}
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
            value={formData.engineDisplacement}
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
            value={formData.gearbox}
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
            value={formData.torque}
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
            value={formData.power}
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
            value={formData.price}
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
            value={formData.fuelTank}
            onChange={handleInputChange}
            placeholder="Fuel Tank Capacity In Litres"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateForm;
