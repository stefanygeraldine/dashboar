import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const Icon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
}));

export default Icon;