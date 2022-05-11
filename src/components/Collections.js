import React from "react";
import CollectionList from "./CollectionList";

const Collections = ({ collections }) => {
  return (
    <>
      {collections.length > 0 ? (
        <CollectionList collections={collections} />
      ) : (
        ""
      )}
    </>
  );
};

export default Collections;
