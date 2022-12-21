import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MuiAppBar from '@mui/material/AppBar';

// Material styles
import {styled} from "@mui/material/styles";
import {appBarStyle} from "../styles/styleComponents";

// Material icons
import MenuIcon from '@mui/icons-material/Menu';

// interfaces
import {IAppBarProps, Props} from "../interfaces";

const shouldForwardProp = (prop: string) => prop !== 'open'

const AppBar = styled(MuiAppBar, {shouldForwardProp})
    <IAppBarProps>(({ theme, open }) => (appBarStyle(theme, open)));


const Header = (props: Props) => {
    const { open, handleDrawer } = props
    return(
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={()=>handleDrawer(true)}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Persistent drawer
                </Typography>
            </Toolbar>
        </AppBar>
    )
}


export default Header