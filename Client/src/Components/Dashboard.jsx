import React, { useEffect, useState } from "react";
import BikeCard from "./BikeCard";
import { useDispatch, useSelector } from "react-redux";
import { showBikes } from "../Redux/Features/Bike.Slice";
import DisplayModal from "./DisplayModal";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { bikes, error, loading, searchData } = useSelector(
    (state) => state.app
  );

  console.log(searchData);

  const [showModal, setShowModal] = useState(false);

  const [ID, setID] = useState(0);

  useEffect(() => {
    dispatch(showBikes());
  }, []);
  return (
    <>
      {showModal && <DisplayModal setShowModal={setShowModal} ID={ID} />}
      {loading ? (
        <h2 className="text-center align-content-center">Loading...</h2>
      ) : (
        <div className="px-2 py-2 d-flex gap-2 flex-wrap justify-content-center">
          {bikes &&
            bikes
              .filter((bike) => {
                if (!searchData.length) return bike;
                else {
                  return bike.name
                    .toLowerCase()
                    .includes(searchData.toLowerCase()) || bike.manufacturer
                    .toLowerCase()
                    .includes(searchData.toLowerCase());
                }
              })
              .map((bike, index) => (
                <BikeCard
                  key={index}
                  bike={bike}
                  setShowModal={setShowModal}
                  ID={ID}
                  setID={setID}
                  index={index + 1}
                />
              ))}
        </div>
      )}
    </>
  );
};

export default Dashboard;
