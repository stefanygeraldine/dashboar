import { AppBarProps } from "@mui/material/AppBar/AppBar";

export interface IAppBarProps extends AppBarProps {
    open?: boolean;
}

export interface Props {
    open: boolean,
    handleDrawer: (value: boolean) => void
}