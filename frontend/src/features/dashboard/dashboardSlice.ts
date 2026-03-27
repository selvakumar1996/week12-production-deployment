import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    users: 1200,
    sales: 3500,
    revenue: 8000,
  },
  reducers: {
    updateUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { updateUsers } = dashboardSlice.actions;
export default dashboardSlice.reducer;