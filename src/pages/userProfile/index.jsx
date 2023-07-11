import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Header from "../../components/Header";
import "./index.scss";

const UserProfile = () => {
  return(
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="datatableTitle">
        <Header title="User profile" />
        <Link to="/users/new" className="link">
          Edit user
        </Link>
      </div>
      <div className="userContainer">
        <h1 className="itemTitle">Jane Doeeee</h1>
        <div className="detailItem">
          <span className="itemKey">Email:</span>
          <span className="itemValue">janedoe@gmail.com</span>
        </div>
        <div className="detailItem">
          <span className="itemKey">Phone:</span>
          <span className="itemValue">+1 2345 67 89</span>
        </div>
        <div className="detailItem">
          <span className="itemKey">Address:</span>
          <span className="itemValue">
            Elton St. 234 Garden Yd. NewYork
          </span>
        </div>
        <div className="detailItem">
          <span className="itemKey">Country:</span>
          <span className="itemValue">USA</span>
        </div>
      </div>
    </Box>
  );
};

export default UserProfile;
