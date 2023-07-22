import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Header = ({ title, subtitle, subtitleColor = "#e6a307" }) => {
  return (
    <Box mb="20px">
      <Typography
        component="h2"
        style={{ fontSize: '1.8rem' }}
        color="#141414"
        fontWeight="bold"
        sx={{ m: "0 0 1px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="subtitle1" color={subtitleColor}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
