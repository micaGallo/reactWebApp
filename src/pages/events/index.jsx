import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import "./index.scss";
import Header from "../../components/Header";
import Table from "../../components/Table"
import { headCells, eventRows } from "../../helpers/event/datatablesource";

const Events = () => {
  const handleDelete = (ids) => {
    console.log("handleDelete events", ids);
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete}
  ];

  return(
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="eventsTitleContainer">
        <Header title="EVENTS"/>
      </div>
      <Table
        tableTitle={"To access more actions, please select one or more events"}
        menuItems={menuItems}
        headCells={headCells}
        rows={eventRows}
        redirectTo={"/events/"}
      />
    </Box>
  );
};

export default Events;