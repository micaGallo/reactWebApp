import Box from '@mui/material/Box';
import { Grid } from "@mui/material";

const DataDetailsItem = ({ title, value, showSeparator = true}) => {
  return (
    <>
      <Grid item xs={3}>{title}</Grid>
      <Grid item xs={9} sx={{ color: "#757575" }}>{value}</Grid>
      { showSeparator &&
        <Box
          component="span"
          sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
        />
      }
    </>
  );
};

export default DataDetailsItem;