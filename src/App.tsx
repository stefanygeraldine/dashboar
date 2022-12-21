import { useState } from 'react';

// Material styles
import CssBaseline from '@mui/material/CssBaseline';

// Material UI Components
import Box from '@mui/material/Box';

import Header from './components/Header';
import SideBar from "./components/SideBar";
import Content from './components/Content'

export function App() {
  const [open, setOpen] = useState(false);
  const handleDrawer = (value: boolean) : void => {
    setOpen(value);
  };

  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header open={open} handleDrawer={handleDrawer}/>
        <SideBar open={open} handleDrawer={handleDrawer}/>
        <Content open={open}/>
      </Box>
  );
}

export default App;
