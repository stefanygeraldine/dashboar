import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SsidChartIcon from '@mui/icons-material/SsidChart';

import Barchart from "./BarChart";
import DonutChart from "./DonutChart";
import AreaChart from "./AreaChart";
import HeatMapChart from "./HeatMapChart";

import CustomCard from "../../ui/CustomCard";
import Subtitle from "../../ui/Subtitle";
import Item from "../../ui/Item";
import Icon from "../../ui/Icon";

export default function ApexCharts() {
    const height = 300
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4}>
                    <CustomCard color="#1e88e5">
                        <Icon aria-label="BarChartIcon">
                            <BarChartIcon fontSize="large"/>
                            </Icon>
                        <Subtitle> $500.00 </Subtitle>
                    </CustomCard>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <CustomCard color="#5e35b1">
                        <Icon aria-label="BarChartIcon">
                            <TrendingUpIcon fontSize="large"/>
                        </Icon>
                        <Subtitle> $500.00 </Subtitle>
                    </CustomCard>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <CustomCard color="#ffffff" circleColor="#feb019">
                        <IconButton aria-label="BarChartIcon">
                            <SsidChartIcon fontSize="large"/>
                            </IconButton>
                        <Subtitle> $500.00 </Subtitle>
                    </CustomCard>
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