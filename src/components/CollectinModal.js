import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const handleClose = () => {
    props.setOpenModal(false);
  };

  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.setCollectionName(name);
    props.setOpenModal(false);
  };
  return (
    <div>
      <Modal
        open={props.openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            fullWidth
            label="Enter the name of the collection"
            id="fullWidth"
            value={name}
            onChange={(e) => handleChange(e)}
          />
          <Button variant="outlined" onClick={(e) => onSubmit(e)}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
