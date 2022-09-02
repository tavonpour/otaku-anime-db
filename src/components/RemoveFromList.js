import React from "react";

const RemoveFromList = ({ anime, removeAnime }) => {
  return (
    <div className="my-list" onClick={(anime) => removeAnime(anime)}>
      <p>Remove From List -</p>
    </div>
  );
};

export default RemoveFromList;
