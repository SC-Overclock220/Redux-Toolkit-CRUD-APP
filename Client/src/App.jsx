import React from "react";
import Navbar from "./Components/Navbar";
import CreateForm from "./Components/CreateForm";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route element={<Dashboard />} path="/"></Route>
        <Route element={<CreateForm />} path="/create"></Route>
      </Routes>
    </>
  );
};

export default App;
