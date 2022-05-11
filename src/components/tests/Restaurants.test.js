import React from "react";
import ReactDom from "react-dom";
import Restaurants from "../Restaurants";

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<Restaurants/>, div)
})