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
import BarChartIcon from '@mui/icons-material/BarChart';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SvgIcon  from "@mui/material/SvgIcon";

//styles
import {drawerHeaderStyle, drawerStyle} from "../styles/styleComponents";

//redux
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setView, selectedMenu } from "../features/navigation/navigationSlice";

// interfaces
import { Props, chartTypeString } from "../interfaces"


const DrawerHeader = styled('div')(({ theme }) => (drawerHeaderStyle(theme)));

interface ItemMenu {
    title: chartTypeString,
    Icon: typeof SvgIcon,
}

const SideBar = (props: Props) => {
    const dispatch = useAppDispatch();
    const menu = useAppSelector(selectedMenu);
    const { open, handleDrawer } = props
    const theme = useTheme();


    const items : ItemMenu[] = [
        {
            title: 'Apexcharts',
            Icon: BarChartIcon,
        },
        {
            title: 'Recharts',
            Icon: BubbleChartIcon,
        },
        {
            title: 'Plotly',
            Icon: SsidChartIcon,
        },
        {
            title: 'ChartsJs',
            Icon: QueryStatsIcon,
        },

    ]

    return(
        <Drawer sx={drawerStyle()} variant="persistent" anchor="left" open={open}>
            <DrawerHeader>
                <IconButton onClick={()=>handleDrawer(false)}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {items.map( ({title, Icon }) => {
                    return(
                        <ListItem disablePadding key={title} selected={menu === title}>
                            <ListItemButton  onClick={() => dispatch(setView(title))}>
                                <ListItemIcon>
                                    <Icon/>
                                </ListItemIcon>
                                <ListItemText primary={title} />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Drawer>
    )
}

export default SideBar