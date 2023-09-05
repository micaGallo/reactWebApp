import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ErrorMessage = ({error = "Upss, something wents wrong"}) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, textAlign: 'center', fontSize: 'h6.fontSize'}}>
      <Typography style={{ color: '#bf0707' }} variant="body1"> 
        {error}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;