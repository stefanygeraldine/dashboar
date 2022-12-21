import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import {newShade} from "../utils";

type CustomCardProps = {
    color: string,
    circleColor?: string
}

export default function CustomCard(props: CustomCardProps) {
    const { color, circleColor } = props
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        backgroundColor: color,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        lineHeight: '60px',
        position: 'relative',
        overflow: 'hidden',
        '&:before':{
            content:'""',
            position: 'absolute',
            width: 200,
            height: 200,
            borderRadius: '50%',
            backgroundColor: newShade(circleColor ? circleColor :color, -5),
            right: '-40px',
            top: '-121px',
        },
        '&:after':{
            content:'""',
            position: 'absolute',
            width: 200,
            height: 200,
            borderRadius: '50%',
            backgroundColor: newShade(circleColor ? circleColor :color, -10),
            right: '-100px',
            top: '-87px',
        }
    }));
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    width: '100%',
                    minHeight: 128,
                },
            }}
        >
            <Item elevation={3}>
               custom
            </Item>
        </Box>
    );
}