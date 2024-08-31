// redux/features/booking/bookingSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingState {
  facility: any;
}

const initialState: BookingState = {
  facility: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setFacility: (state, action: PayloadAction<any>) => {
      state.facility = action.payload;
    },
    clearFacility: (state) => {
      state.facility = null;
    },
  },
});

export const { setFacility, clearFacility } = bookingSlice.actions;

export default bookingSlice.reducer;
