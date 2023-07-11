import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Header from "../../components/Header";
import Table from "../../components/Table";

const Posts = () => {
  return(
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="datatableTitle">
        <Header title="POSTS" subtitle="Managing the posts" />
      </div>
      <Table />
    </Box>
  );
};

export default Posts;
