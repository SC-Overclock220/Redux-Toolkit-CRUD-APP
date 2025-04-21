import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = `${import.meta.env.VITE_BASE_URL_PREFIX}${
  import.meta.env.VITE_MOCK_API_KEY
}${import.meta.env.VITE_BASE_URL_SUFFIX}`;

export const createBike = createAsyncThunk(
  "createBike",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(URL, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const showBikes = createAsyncThunk(
  "showBikes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteBike = createAsyncThunk(
  "deleteBike",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${URL}/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateBike = createAsyncThunk(
  "updateBike",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${URL}/${formData.id}`, formData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const bikeDetail = createSlice({
  name: "bikeDetail",
  initialState: { bikes: [], loading: false, error: null, searchData: [] },
  reducers: {
    searchBikeData: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBike.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBike.fulfilled, (state, action) => {
        state.loading = false;
        state.bikes.push(action.payload);
      })
      .addCase(createBike.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(showBikes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showBikes.fulfilled, (state, action) => {
        state.loading = false;
        state.bikes = action.payload;
      })
      .addCase(showBikes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteBike.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBike.fulfilled, (state, action) => {
        state.loading = false;

        const { id } = action.payload;

        if (id) state.bikes = state.bikes.filter((bike) => bike.id !== id);
      })
      .addCase(deleteBike.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateBike.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBike.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        console.log(state.bikes);
        state.bikes = state.bikes.map((bike) =>
          bike.id === action.payload.id ? action.payload : bike
        );
      })
      .addCase(updateBike.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bikeDetail.reducer;

export const { searchBikeData } = bikeDetail.actions;
