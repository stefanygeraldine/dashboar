import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const SubtitleComponent = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roboto',
  fontSize: '2.125rem',
  fontWeight: 500,
  color: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
}));

type Props = {
  children?:
  | string
  | string[]
}
const Subtitle = (props: Props) => {
  const { children } = props
  return(
    <SubtitleComponent variant="h6">
      { children }
    </SubtitleComponent>
  )
}

export default Subtitle