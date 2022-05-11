import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export default function CollectionList(props) {
  return (
    <List
      sx={{
        width: "100%",
        // maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        // maxHeight: 300,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {props.collections.map((c) => (
        <li key={`section-${c.collectionName}`}>
          <ul>
            <ListSubheader>{c.collectionName}</ListSubheader>
            {c.restaurants.map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
