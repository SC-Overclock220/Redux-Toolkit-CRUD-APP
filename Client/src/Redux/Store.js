import { configureStore } from "@reduxjs/toolkit";
import bikeDetail from "./Features/Bike.Slice";

const store = configureStore({
  reducer: { app: bikeDetail },
});

export default store;
