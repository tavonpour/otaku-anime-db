import React from "react";

const AddToList = ({ anime, addAnime }) => {
  return (
    <div className="my-list" onClick={(anime) => addAnime(anime)}>
      <p>Add To List +</p>
    </div>
  );
};

export default AddToList;
