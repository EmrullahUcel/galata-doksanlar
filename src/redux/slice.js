import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: "hot-coffees",
  price: "",
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { setUrl } = dataSlice.actions;
export default dataSlice.reducer;
