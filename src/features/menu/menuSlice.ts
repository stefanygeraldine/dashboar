import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface MenuState {
  name:'Apexcharts' | 'Recharts' | 'Plotly' | 'ChartsJs'
}

const initialState: MenuState = {
  name: 'Apexcharts',
};


export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setView: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setView } = menuSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectedMenu = (state: RootState) => state.menu.name;

export default menuSlice.reducer;
