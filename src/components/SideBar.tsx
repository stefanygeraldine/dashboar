import {drawerHeaderStyle, drawerStyle} from "../styles/styleComponents";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import {styled, useTheme} from "@mui/material/styles";
import {Props} from "../interfaces";
import BarChartIcon from '@mui/icons-material/BarChart';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';


const DrawerHeader = styled('div')(({ theme }) => (drawerHeaderStyle(theme)));
const SideBar = (props: Props) => {
    const { open, handleDrawer } = props
    const theme = useTheme();

    return(
        <Drawer sx={drawerStyle()} variant="persistent" anchor="left" open={open}>
            <DrawerHeader>
                <IconButton onClick={()=>handleDrawer(false)}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <BarChartIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Apexcharts" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <BubbleChartIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Recharts" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SsidChartIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Plotly" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <QueryStatsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Charts Js" />
                        </ListItemButton>
                    </ListItem>


            </List>
        </Drawer>
    )
}

export default SideBar