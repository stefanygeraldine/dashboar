// styles
import {styled} from "@mui/material/styles";
import {drawerHeaderStyle, mainStyle} from "../styles/styleComponents";

//interfaces
import {IAppBarProps, Props} from "../interfaces";

//Components
import ApexCharts from "../features/apexCharts/ApexCharts";

const shouldForwardProp = (prop: string) => prop !== 'open'

const Main = styled('main', { shouldForwardProp })
    <IAppBarProps> (({ theme, open }) => (mainStyle(theme, open)));

const DrawerHeader = styled('div')(({ theme }) => (drawerHeaderStyle(theme)));


const Content = (props: Partial <Props>) => {
    const { open } = props
    return(
        <div style={{backgroundColor: "#e3f2fd"}}>
            <Main open={open}>
                <DrawerHeader />
                <ApexCharts/>
            </Main>
        </div>
    )
}

export default Content