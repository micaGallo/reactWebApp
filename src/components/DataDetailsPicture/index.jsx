import Box from '@mui/material/Box';

const DataDetailsPicture = ({ pictureUrl, defaultPictureUrl}) => {
  return (
    <Box display="block" justifyContent="center" alignItems="center">
      <img
        alt="profile-user"
        width="120px"
        height="120px"
        src={pictureUrl || defaultPictureUrl}
        style={{ borderRadius: "10%", objectFit: "cover"}}
      />
    </Box>
  );
};

export default DataDetailsPicture;