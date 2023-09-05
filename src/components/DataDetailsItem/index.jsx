import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import { DATA_DETAILS_ITEM_TYPE } from '../../utils/constants';

const DataDetailsItem = ({ type, title, value, showSeparator = true}) => {
  return (
    <>
      <Grid item xs={3}>{title}</Grid>
      {/* <Grid item xs={9} sx={{ color: "#757575" }}>{value}</Grid> */}
      {(() => {
        switch (type) {
          case DATA_DETAILS_ITEM_TYPE.text:
            return (
              <Grid item xs={9} sx={{ color: "#757575" }}>{value}</Grid>
            );

          case DATA_DETAILS_ITEM_TYPE.html:
            return (
              <Grid item xs={9}>
                <div
                  dangerouslySetInnerHTML={{ __html: value }}
                  style={{ color: "#757575" }}
                />
              </Grid>
            );

          default:
            return <></>;  
        }
      })()}

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