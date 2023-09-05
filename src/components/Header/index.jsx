import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Header = ({ title, subtitle, subtitleColor = "#e6a307", titleSize="h2", subtitleVariant="subtitle1", fontSizeNeeded=true }) => {
  return (
    <Box mb="20px">
      <Typography
        component={titleSize}
        style={{ fontSize: fontSizeNeeded ? '1.8rem' : undefined }}
        color="#141414"
        fontWeight="bold"
        sx={{ m: "0 0 1px 0" }}
      >
        {title}
      </Typography>
      <Typography variant={subtitleVariant} color={subtitleColor}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
