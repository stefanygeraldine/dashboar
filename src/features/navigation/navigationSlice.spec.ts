import menuReducer, { setView } from "./navigationSlice";
import { NavigationState } from "../../interfaces";

describe('navigation reducer', () => {
  const initialState: NavigationState = {
    name: 'Recharts',
  };
  it('should handle set view', () => {
    const actual = menuReducer(initialState, setView('Apexcharts'));
    expect(actual.name).toEqual('Apexcharts');
  });
});
