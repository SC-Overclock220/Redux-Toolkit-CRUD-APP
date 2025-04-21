import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchBikeData } from "../Redux/Features/Bike.Slice";

const Navbar = () => {
  const [searchData, setSearchData] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchBikeData(searchData));
  };
  const allBikes = useSelector((state) => state.app.bikes);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            React-Redux CRUD
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  All Bikes {allBikes.length ? allBikes.length : ``}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Create
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="searchData"
                value={searchData}
                onChange={handleInputChange}
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
