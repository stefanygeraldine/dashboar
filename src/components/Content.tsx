// styles
import {styled} from "@mui/material/styles";
import {drawerHeaderStyle, mainStyle} from "../styles/styleComponents";

//interfaces
import {IAppBarProps, Props} from "../interfaces";

//Components
import ApexCharts from "../features/apexCharts/ApexCharts";
import {useAppSelector} from "../app/hooks";
import {selectedMenu} from "../features/menu/menuSlice";

const shouldForwardProp = (prop: string) => prop !== 'open'

const Main = styled('main', { shouldForwardProp })
    <IAppBarProps> (({ theme, open }) => ({...mainStyle(theme, open), backgroundColor: '#e3f2fd'}));

const DrawerHeader = styled('div')(({ theme }) => (drawerHeaderStyle(theme)));


const Content = (props: Partial <Props>) => {
    const { open } = props
    const menu = useAppSelector(selectedMenu);
    return(
            <Main open={open}>
                <DrawerHeader />
                {menu === 'Apexcharts' &&  <ApexCharts/>}
                {menu === 'ChartsJs' &&  <h1>ChartsJs</h1>}
                {menu === 'Plotly' &&  <h1>Plotly</h1>}
                {menu === 'Recharts' &&  <h1>Recharts</h1>}
            </Main>
    )
}

export default Content