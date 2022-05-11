import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
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

const Restaurantlist = ({ resList, setCollections, collections }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const onClickRestaurant = (e, name) => {
    if (collections.length > 0) {
      setName(name);
      setOpen(true);
    } else {
      window.alert("Please add collection first");
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onClickCollection = async (e, collectionName) => {
    e.preventDefault();
    setOpen(false);
    const objIndex = await collections.findIndex(
      (obj) => obj.collectionName == collectionName
    );
    collections[objIndex].restaurants.push(name);
    setCollections(collections);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Restaurant Name</b>
              </TableCell>
              <TableCell></TableCell>
              <TableCell align="right">
                <b>Timings</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resList &&
              resList.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    onClick={(e) => onClickRestaurant(e, item.name)}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Add to your collection
                  </TableCell>
                  <TableCell align="right">{item.time}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Collection List
          </Typography>
          {collections.map((c) => (
            <div
              style={{
                cursor: "pointer",
              }}
              onClick={(e) => onClickCollection(e, c.collectionName)}
            >
              {c.collectionName}
            </div>
          ))}
        </Box>
      </Modal>
    </>
  );
};

export default Restaurantlist;
