import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import Box from "@mui/material/Box";
import FilterDayTime from "./FilterDayTime";
import RestaurantList from "./RestaurantList";
import Collections from "./Collections";
import restaurantImg from "./../images/Restaurant_img.jpg";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Button from "@mui/material/Button";

const Restaurants = (props) => {
  const [showCollections, setShowCollections] = useState(false);
  const [collections, setCollections] = useState([]);
  const [collectionName, setCollectionName] = useState("");
  const theme = createTheme();
  const [timeQuery, setTimeQuery] = useState("");
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const URL = "http://localhost:8000/api/restaurant/";

  useEffect(() => {
    if (collectionName) {
      setCollections([
        ...collections,
        { collectionName: collectionName, restaurants: [] },
      ]);
    }
  }, [collectionName]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(URL + `time?value=${timeQuery}`);
        setList(res.data.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    if (timeQuery) {
      fetchData();
    }
  }, [timeQuery]);

  const onClickNameFilter = async () => {
    if (name) {
      try {
        const res = await axios.get(URL + `name?value=${name}`);
        setList(res.data.data);
      } catch (error) {
        console.log("error", error);
      }
    } else {
      window.alert("Please enter name");
    }
  };

  const restaurantHeading = {
    title: "Restaurant List",
    description:
      "Filter restaurants by day and time as well as restaurant name",
    image: restaurantImg,
    imageText: "main image description",
  };

  const collectionsHeading = {
    title: "Collections",
    description:
      "Add new collections and add your favourite restaurants to your collections.",
    image: restaurantImg,
    imageText: "main image description",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header
            title={showCollections ? "Your Collection" : "Restaurants"}
            setShowCollections={setShowCollections}
            showCollections={showCollections}
            setCollections={setCollections}
            setCollectionName={setCollectionName}
          />
          <main>
            <MainFeaturedPost
              post={showCollections ? collectionsHeading : restaurantHeading}
            />
            <Grid container>
              <Grid item md={6}>
                <Box
                  sx={{
                    position: "relative",
                    p: { xs: 3, md: 6 },
                    pr: { md: 0 },
                  }}
                >
                  {showCollections ? (
                    ""
                  ) : (
                    <div className="row new-section">
                      <div className="column">
                        <h2>Filter by name:</h2>
                        <br />
                        <TextField
                          fullWidth
                          label="Enter the name of the restaurant"
                          id="fullWidth"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <Button
                          variant="outlined"
                          onClick={(e) => onClickNameFilter(e)}
                        >
                          Submit
                        </Button>
                      </div>

                      <div className="column">
                        <h2>Filter by day and time:</h2>
                        <br />
                        <FilterDayTime setTimeQuery={setTimeQuery} />
                      </div>
                    </div>
                  )}
                </Box>
              </Grid>
            </Grid>
          </main>
          {showCollections ? (
            <Collections collections={collections && collections} />
          ) : (
            <>
              {list.length > 0 ? (
                <RestaurantList
                  resList={list}
                  collections={collections && collections}
                  setCollections={setCollections}
                />
              ) : (
                ""
              )}
            </>
          )}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Restaurants;
