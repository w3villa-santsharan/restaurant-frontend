import React, { useEffect, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BasicModal from "./CollectinModal";

function Header(props) {

  const [openModal, setOpenModal] = useState(false);



  const onCollectionClick = () => {
    props.setShowCollections(true);
  };

  const onClickBack = () => {
    props.setShowCollections(false);
  };

  const addNewCollection = () => {
    setOpenModal(true);
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {props.title}
        </Typography>
        {!props.showCollections ? (
          <Button variant="outlined" onClick={onCollectionClick}>
            Go to collectionss
          </Button>
        ) : (
          <>
            <Button variant="outlined" onClick={onClickBack}>
              Back
            </Button>
            &nbsp;&nbsp;
            <Button variant="outlined" onClick={addNewCollection}>
              Add new collection
            </Button>
          </>
        )}
      </Toolbar>
      {openModal ? (
        <BasicModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          setCollectionName={props.setCollectionName}
        />
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default Header;
