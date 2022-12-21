import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { NavigationState, chartTypeString } from "../../interfaces"

const initialState: NavigationState = {
  name: 'Apexcharts',
};

export const navigationSlice = createSlice({
  name: 'menu',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setView: (state, action: PayloadAction<chartTypeString>) => {
      state.name = action.payload;
    },
  },
});

export const { setView } = navigationSlice.actions;
export const selectedMenu = (state: RootState) => state.navigation.name;

export default navigationSlice.reducer;
