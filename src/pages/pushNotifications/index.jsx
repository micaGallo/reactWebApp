import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "./index.scss";
import Header from "../../components/Header";
import Table from "../../components/Table"
import { headCells, notificationsRows } from "../../helpers/pushNotifications/datatablesource";

const PushNotifications = () => {
  const handleDelete = (ids) => {
    console.log("handleDelete push notifications", ids);
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete}
  ];

  return(
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="notificationstTitleContainer">
        <Header title="PUSH NOTIFICATIONS"/>
        <Button variant="outlined" href={`/notifications/new`}>Add notification</Button>
      </div>
      <Table
        tableTitle={"To access more actions, please select one or more notifications"}
        menuItems={menuItems}
        headCells={headCells}
        rows={notificationsRows}
        hasAction={false}
      />
    </Box>
  );
};

export default PushNotifications;
