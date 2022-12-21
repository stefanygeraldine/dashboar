import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Barchart from "./BarChart";
import DonutChart from "./DonutChart";
import AreaChart from "./AreaChart";
import HeatMapChart from "./HeatMapChart";

import CustomCard from "../../ui/CustomCard";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ApexCharts() {
    const height = 300
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4}>
                    <CustomCard color="#1e88e5"/>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <CustomCard color="#5e35b1"/>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <CustomCard color="#ffffff" circleColor="#fceec1"/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Item> <Barchart height={height} /> </Item>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Item> <DonutChart height={height}/> </Item>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Item> <AreaChart height={height}/> </Item>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Item> <HeatMapChart height={height}/> </Item>
                </Grid>
            </Grid>
        </Box>
    );
}