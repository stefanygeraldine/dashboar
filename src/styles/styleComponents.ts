import {Theme} from "@mui/material";

const drawerWidth = 240;

interface ITransitionsPartial {
    easing: string,
    duration: number
}

interface ITransition {
    transitionLeavingScreen: ITransitionsPartial,
    transitionEnteringScreen: ITransitionsPartial
}

const transitionConfig = (theme: Theme) : ITransition => {
    const {  transitions } = theme
    const { easing, duration } = transitions
    const { sharp, easeOut} = easing
    const { leavingScreen, enteringScreen} = duration

    const transitionLeavingScreen = { easing: sharp, duration: leavingScreen }
    const transitionEnteringScreen = { easing: easeOut, duration: enteringScreen }

    return {transitionLeavingScreen, transitionEnteringScreen}
}

export const mainStyle = (theme: Theme, open?: boolean)  => {
    const {  transitions, spacing } = theme
    const { transitionLeavingScreen, transitionEnteringScreen } = transitionConfig(theme)
    return {
        flexGrow: 1,
        padding: spacing(3),
        transition: transitions.create('margin', open ? transitionEnteringScreen :  transitionLeavingScreen),
        marginLeft: open ? 0 : `-${drawerWidth}px`,
    }
}

export const appBarStyle = (theme: Theme, open?: boolean) => {
    const { transitionLeavingScreen, transitionEnteringScreen } = transitionConfig(theme)
    return {
        transition: theme.transitions.create(['margin', 'width'], open ? transitionEnteringScreen : transitionLeavingScreen),
        marginLeft: open ? 0 : `-${drawerWidth}px`,
        width: `calc(100% - ${open ? drawerWidth : 0}px)`,
    }
}

export const drawerHeaderStyle = (theme: Theme) => {
    return {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }
}

export const drawerStyle = ()=>{
    return {
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
        },
    }
}