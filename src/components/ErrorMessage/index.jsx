import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ErrorMessage = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, textAlign: 'center', fontSize: 'h6.fontSize'}}>
      <Typography style={{ color: '#bf0707' }} variant="body1"> 
        Upss, something wents wrong
      </Typography>
    </Box>
  );
};

export default ErrorMessage;