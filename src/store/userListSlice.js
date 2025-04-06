import { createSlice } from "@reduxjs/toolkit";
import data from "./../data/data.json";

const userListSlice = createSlice({
  name: "userList",
  initialState: {
    list: data,
  },
  reducers: {
    editSingleUser(state, action) {
      const singleUser = state.list.find(
        (user) => user.id === action.payload.id
      );
      singleUser.name =
        action.payload.name !== ""
          ? action.payload.name
          : singleUser.name;
      singleUser.company =
        action.payload.company !== ""
          ? action.payload.company
          : singleUser.company;
      singleUser.department =
        action.payload.department !== ""
          ? action.payload.department
          : singleUser.department;
      singleUser.jobTitle =
        action.payload.jobTitle !== ""
          ? action.payload.jobTitle
          : singleUser.jobTitle;
    },
  },
});

export const { editSingleUser } = userListSlice.actions;
export default userListSlice.reducer;
