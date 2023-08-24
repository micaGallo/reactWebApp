import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "./index.scss";
import Header from "../../components/Header";
import Modal from '../../components/Modal';
import { headCells, userRows } from "../../helpers/user/datatablesource";
import UserTable from "../../components/UserTable"

const Users = () => {
  //open confirmation modal
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedIds, setSelectedIds] = useState(false);

  const  handleConfirm = () => {
    console.log("confirm")
  };

  const handleDelete = (ids) => {
    setOpenDeleteModal(true);
    setSelectedIds(ids);
    console.log("handleDelete", openDeleteModal);

    const  handleConfirm = () => {
      console.log("confirm")
    };

    return(
      <>
      <h1>Hila</h1>
        {/* <Modal
          title='Delete user'
          description={`Are you sure you want to delete the users: ${ids} ?`}
          handleConfirm={handleConfirm}
          setOpenModal={setOpenDeleteModal}
        /> */}
      </>
    );
  };

  const handleBlock = (ids) => {
    console.log("handleBlock", ids);
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete},
    {name: 'Block', action: handleBlock},
  ];

  return(
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="userListTitleContainer">
        <Header title="USERS"/>
        <Button variant="outlined" href={`/users/new`}>Add User</Button>
      </div>
      <UserTable
        tableTitle={"To access more actions, please select one or more users"}
        menuItems={menuItems}
        headCells={headCells}
        rows={userRows}
        redirectTo={"/users/"}
      />
      {
        false &&
          <Modal
            title='Delete user'
            description={`Are you sure you want to delete the users: ${selectedIds} ?`}
            handleConfirm={handleConfirm}
            setOpenDeleteModal={setOpenDeleteModal}
          />
        }
    </Box>
  );
};

export default Users;
