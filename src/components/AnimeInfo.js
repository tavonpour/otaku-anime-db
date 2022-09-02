import React from "react";

const AnimeInfo = (props) => {
  const {
    title,
    images: {
      jpg: { image_url },
    },
    source,
    rank,
    score,
    popularity,
    members,
    status,
    rating,
    duration,
  } = props.animeInfo;

  return (
    <div className="anime-content">
      <h3>{title}</h3>
      <br />
      <img src={image_url} alt="" />
      <div className="info">
        <h3>Rank: #{rank}</h3>
        <h3>Score: {score} / 10</h3>
        <h3>Popularity: {popularity}</h3>
        <hr />
        <br />
        <h4>Members: {members}</h4>
        <h4>Source: {status}</h4>
        <h4>Duration: {duration}</h4>
        <h4>Status: {status}</h4>
        <h4>Rating: {rating}</h4>
      </div>
    </div>
  );
};

export default AnimeInfo;
