import menuReducer, {
  MenuState,
  setView,
} from './menuSlice';

describe('menu reducer', () => {
  const initialState: MenuState = {
    name: 'Recharts',
  };
  it('should handle set view', () => {
    const actual = menuReducer(initialState, setView('Apexcharts'));
    expect(actual.name).toEqual('Apexcharts');
  });
});
