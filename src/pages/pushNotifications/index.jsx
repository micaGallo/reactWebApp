import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Header from "../../components/Header";
import Table from "../../components/Table";

const PushNotifications = () => {
  return(
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="datatableTitle">
        <Header title="PUSH NOTIFICATIONS" subtitle="Managing the push notifications" />
      </div>
      <Table />
    </Box>
  );
};

export default PushNotifications;
